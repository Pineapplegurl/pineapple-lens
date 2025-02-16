import React, { useEffect } from "react";

function AdSlide() {
  useEffect(() => {
    // Charge dynamiquement les annonces AdSense après le montage
    if (window.adsbygoogle && typeof window.adsbygoogle.push === "function") {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "70vh", // Garde une hauteur uniforme pour l'annonce
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f9f9f9", // Arrière-plan gris clair pour délimiter l'annonce
      }}
    >
      {/* Insère ici ton code AdSense */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100%" }}
        data-ad-client="ca-pub-2168877212681144" // Remplace avec ton ID client AdSense
        data-ad-slot="1234567890" // Remplace avec ton slot publicitaire
      />
    </div>
  );
}

export default AdSlide;