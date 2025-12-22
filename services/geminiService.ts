
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { translations } from "../translations";
import { Language } from "../App";

export async function* streamCareerAdvice(message: string, lang: Language) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
    const t = translations[lang].ai;
    
    const responseStream = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: message }] }],
      config: {
        systemInstruction: t.system + " Provide strategic career advice for engineers. Focus on future industry trends in Indonesia and global standards.",
        temperature: 0.8,
      },
    });

    for await (const chunk of responseStream) {
      const text = (chunk as GenerateContentResponse).text;
      if (text) {
        yield text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield lang === 'id' ? "Maaf, kendala koneksi." : "Sorry, connection issue.";
  }
}
