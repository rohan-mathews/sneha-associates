from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from openai import OpenAI

app = Flask(__name__)
CORS(app)

# 👇 CONNECTION SETUP (Secure & Correct for OpenRouter)
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    # This grabs the key from the Render Dashboard (Environment Variable)
    api_key=os.environ.get("OPENROUTER_API_KEY"),
)

# 🧠 THE BRAIN: The "Company Handbook" for Sneha Associates
SYSTEM_INSTRUCTION = """
You are the AI Sales Manager for 'Sneha Associates', a premium Civil Construction firm in Bengaluru.
Your goal is to impress clients, explain services, and encourage them to book a consultation.

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

### 💰 PRICING ESTIMATES (Use these as a guide, not a final quote):
- **Basic Construction:** Approx. ₹1,600 - ₹1,800 per sq. ft.
- **Premium Construction:** Approx. ₹2,200 - ₹2,500 per sq. ft. (Teak wood, Italian marble finish).
- **Waterproofing:** ₹45 - ₹80 per sq. ft. depending on the chemical/method used.
- *Note:* Always mention: "Exact cost depends on the materials you choose. Shall I arrange a site visit for a better quote?"

### 🚫 IMPORTANT RULES:
1. **Keep it Short:** Answers must be under 60 words. People scan text quickly.
2. **Be Professional yet Warm:** Use a helpful, confident tone.
3. **Call to Action:** End answers with a question like "Do you have a plot size in mind?" or "When are you planning to start?"
4. **Scope:** Do not answer questions unrelated to construction, architecture, or design.
"""

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message')

        if not user_message:
            return jsonify({"error": "No message provided"}), 400

        # Send to OpenRouter (using your specific Model)
        response = client.chat.completions.create(
            model="google/gemini-2.0-flash-lite-preview-02-05:free", 
            messages=[
                {"role": "system", "content": SYSTEM_INSTRUCTION},
                {"role": "user", "content": user_message}
            ],
            extra_headers={
                "HTTP-Referer": "https://sneha-associates.vercel.app", 
                "X-Title": "Sneha Associates",
            }
        )

        bot_reply = response.choices[0].message.content
        return jsonify({"response": bot_reply})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # Fix for Render: Use the PORT provided by the cloud
    port = int(os.environ.get('PORT', 10000))
    app.run(host='0.0.0.0', port=port) 
    # Final deployment fix
