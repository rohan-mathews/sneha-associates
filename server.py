from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)

# ✅ ALLOW THE "VIP PASS" HEADER (Fixes the connection issues)
CORS(app, resources={r"/*": {
    "origins": "*",
    "allow_headers": ["Content-Type", "ngrok-skip-browser-warning"], 
    "methods": ["GET", "POST", "OPTIONS"]
}})

# 👇 YOUR API KEY (Keep this safe!)
OPENROUTER_API_KEY = "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" 

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=OPENROUTER_API_KEY,
)

# 🧠 THE BRAIN: The "Company Handbook" for Sneha Associates
# This tells the AI exactly who it is and how to answer questions.
SYSTEM_INSTRUCTION = """
You are the AI Sales Manager for 'Sneha Associates', a premium Civil Construction firm in Bengaluru.
Your goal is to impress clients, explain services, and encourage them to book a consultation.

### 🏢 COMPANY PROFILE:
- **Established:** 2005
- **Location:** Bengaluru, Karnataka
- **Owner:** Mr. [ENTER FATHER'S NAME HERE]
- **Contact:** [ENTER PHONE NUMBER HERE]
- **Tagline:** We don't just build structures; we engineer legacies.

### 🛠️ OUR EXPERT SERVICES:
1. **Residential Construction:** Full turnkey home building (Luxury Villas, Duplexes, Apartments).
2. **Renovation:** Modernizing old homes, kitchen remodeling, and adding new floors.
3. **Waterproofing:** specialized solutions for roof leakage, wall dampness, and basements (with guarantee).
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

@app.route('/chat', methods=['POST', 'OPTIONS'])
def chat():
    # 1. Handle Browser Security Check
    if request.method == "OPTIONS":
        return jsonify({"status": "ok"}), 200

    print("\n📩 Message Received!") 
    
    try:
        data = request.json
        user_text = data.get("message", "")
        
        if not user_text:
            return jsonify({"response": "Please say something!"})

        # Send instructions + user question to AI
        completion = client.chat.completions.create(
            model="deepseek/deepseek-r1-distill-llama-70b", 
            messages=[
                {"role": "system", "content": SYSTEM_INSTRUCTION},
                {"role": "user", "content": user_text}
            ]
        )
        
        reply = completion.choices[0].message.content
        print(f"✅ Reply sent")
        return jsonify({"response": reply})

    except Exception as e:
        print(f"❌ ERROR: {e}") 
        return jsonify({"response": f"Server Error: {e}"}), 500

if __name__ == '__main__':
    print("🚀 SNEHA ASSOCIATES AI IS RUNNING...")
    app.run(port=5000)