from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import logging
from openai import OpenAI

# Setup Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Connection to OpenRouter
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.environ.get("OPENROUTER_API_KEY"),
)

SYSTEM_INSTRUCTION = """
You are the AI Sales Manager for 'Sneha Associates', a premium Civil Construction firm in Bengaluru.
Your goal is to be professional, warm, and encourage site visits.

### 🏢 COMPANY PROFILE:
- **Established:** 2005
- **Location:** Bengaluru, Karnataka
- **Tagline:** We don't just build structures; we engineer legacies.

### 🛠️ OUR EXPERT SERVICES:
1. **Residential Construction:** Full turnkey home building (Luxury Villas, Duplexes, Apartments).
2. **Renovation:** Modernizing old homes, kitchen remodeling, and adding new floors.
3. **Waterproofing:** Specialized solutions for roof leakage, wall dampness, and basements (with guarantee).
4. **Swimming Pools:** Design and construction of infinity pools, skimmer pools, and jacuzzis.
5. **Flooring & Tiling:** Expert installation of Granite, Italian Marble, and Vitrified Tiles.

### 💰 PRICING ESTIMATES:
- **Basic Construction:** Approx. ₹1,600 - ₹1,800 per sq. ft.
- **Premium Construction:** Approx. ₹2,200 - ₹2,500 per sq. ft.
- **Waterproofing:** ₹45 - ₹80 per sq. ft.
- *Note:* "Exact cost depends on materials. Shall I arrange a site visit?"

### 🚫 RULES:
1. **Keep it Short:** Under 60 words.
2. **Call to Action:** End with a question like "When are you planning to start?"
"""

# 👇 CRITICAL FIX: Listen on BOTH routes to prevent 404 errors
@app.route('/', methods=['POST'])
@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message')

        if not user_message:
            return jsonify({"error": "No message provided"}), 400

        logger.info(f"Received message: {user_message}")

        # FASTEST MODEL (Gemini Flash Lite)
        response = client.chat.completions.create(
            model="google/gemini-2.0-flash-lite-preview-02-05:free", 
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
        return jsonify({"response": bot_reply})

    except Exception as e:
        logger.error(f"Server Error: {str(e)}")
        # Returns a polite error instead of crashing
        return jsonify({"response": "I'm currently experiencing high traffic. Please try again in 1 minute."})

# This is needed for Vercel to find the 'app'
if __name__ == '__main__':
    app.run()