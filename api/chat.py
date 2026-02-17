from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import datetime
import logging
from openai import OpenAI
from pymongo import MongoClient

# Setup Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# 1. SETUP MONGODB CONNECTION 🍃
# We wrap this in a try-except block so the chat still works even if DB fails
try:
    mongo_uri = os.environ.get("MONGO_URI")
    if mongo_uri:
        mongo_client = MongoClient(mongo_uri)
        db = mongo_client.sneha_associates # Name of your database
        chats_collection = db.chats        # Name of your "folder" inside the DB
        print("✅ Connected to MongoDB!")
    else:
        print("⚠️ No MONGO_URI found. Chat will work but not save history.")
        chats_collection = None
except Exception as e:
    print(f"❌ MongoDB Connection Failed: {e}")
    chats_collection = None

# 2. SETUP AI CONNECTION 🤖
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.environ.get("OPENROUTER_API_KEY"),
)

# 3. YOUR CUSTOM SALES MANAGER SCRIPT 📝
SYSTEM_INSTRUCTION = """
You are 'Sneha AI', the Sales Manager for Sneha Associates.
Your Goal: Be warm, professional, and collect client phone numbers for site visits.

### 🌟 CORE RULES:
1. **Keep it Short:** Max 2-3 sentences. No long essays.
2. **Be Friendly:** Use emojis like 🏡, 🔨, ✨.
3. **Never Say "I don't know":** If unsure, say "That depends on the site conditions. Shall I arrange a visit to check?"

### 📝 CHEAT SHEET:
- **Who are we?** A 20-year-old premium construction firm in Bengaluru.
- **Cost?** Basic: ₹1,800/sqft | Premium: ₹2,400/sqft. (Always add: "Exact price depends on materials.")
- **Do we do renovation?** Yes! Full home renovations and remodeling.
- **Call to Action:** Always try to get their phone number or schedule a visit.
"""

# 4. THE ROUTE HANDLER (Double Route Fix) 🔗
@app.route('/', methods=['POST'])
@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message')

        if not user_message:
            return jsonify({"error": "No message provided"}), 400

        logger.info(f"Received message: {user_message}")

        # --- STEP A: ASK THE AI ---
        response = client.chat.completions.create(
           model="google/gemma-7b-it:free", 
            messages=[
                {"role": "system", "content": SYSTEM_INSTRUCTION},
                {"role": "user", "content": user_message}
            ],
            extra_headers={
                "HTTP-Referer": "https://snehaassociates.co.in", 
                "X-Title": "Sneha Associates AI",
            }
        )
        bot_reply = response.choices[0].message.content

        # --- STEP B: SAVE TO MONGODB (THE MEMORY) ---
        if chats_collection is not None:
            try:
                chat_log = {
                    "user_message": user_message,
                    "bot_reply": bot_reply,
                    "timestamp": datetime.datetime.utcnow()
                }
                chats_collection.insert_one(chat_log)
                print("✅ Chat saved to DB")
            except Exception as db_error:
                print(f"⚠️ Failed to save to DB: {db_error}")

        return jsonify({"response": bot_reply})

    except Exception as e:
        logger.error(f"Server Error: {str(e)}")
        return jsonify({"response": "I'm having trouble connecting. Please try again."})

# Vercel needs this entry point
if __name__ == '__main__':
    app.run()