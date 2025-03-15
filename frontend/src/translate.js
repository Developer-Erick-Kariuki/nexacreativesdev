// translate.js
export const translateText = async (text, targetLang = "es") => {
  const apiKey = "YOUR_GOOGLE_API_KEY";
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: text,
      target: targetLang,
    }),
  });

  const data = await response.json();
  return data.data.translations[0].translatedText;
};
