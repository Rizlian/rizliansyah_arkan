function calculateZodiac() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const result = document.getElementById("result");
  
    if (isNaN(day) || isNaN(month) || day < 1 || day > 31 || month < 1 || month > 12) {
      result.textContent = "Mohon masukkan tanggal dan bulan yang valid.";
      result.classList.add("show");
      return;
    }
  
    const zodiacDetails = {
      Aquarius: "Aquarius adalah orang yang berpikiran maju, orisinal, dan independen.",
      Pisces: "Pisces adalah orang yang intuitif, penyayang, dan memiliki empati tinggi.",
      Aries: "Aries dikenal sebagai orang yang berani, percaya diri, dan penuh energi.",
      Taurus: "Taurus adalah pribadi yang sabar, stabil, dan dapat diandalkan.",
      Gemini: "Gemini dikenal karena kecerdasannya dan kemampuannya berkomunikasi.",
      Cancer: "Cancer adalah orang yang sensitif, penuh kasih, dan peduli.",
      Leo: "Leo adalah pemimpin alami, percaya diri, dan karismatik.",
      Virgo: "Virgo dikenal dengan sifat perfeksionis, praktis, dan analitis.",
      Libra: "Libra mencintai harmoni, diplomasi, dan keadilan.",
      Scorpio: "Scorpio adalah orang yang bersemangat, tekun, dan memiliki intuisi yang tajam.",
      Sagittarius: "Sagittarius mencintai kebebasan, optimis, dan penuh petualangan.",
      Capricorn: "Capricorn adalah orang yang disiplin, ambisius, dan bertanggung jawab.",
    };
  
    let zodiac = "";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      zodiac = "Aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      zodiac = "Pisces";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      zodiac = "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      zodiac = "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      zodiac = "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      zodiac = "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      zodiac = "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      zodiac = "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      zodiac = "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      zodiac = "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      zodiac = "Sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      zodiac = "Capricorn";
    } else {
      zodiac = "Tidak diketahui.";
    }
  
    result.innerHTML = `
      Zodiak Anda adalah <strong>${zodiac}</strong><br>
      ${zodiacDetails[zodiac] || ""}
    `;
    result.classList.add("show");
  }
  
  function resetInput() {
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    const result = document.getElementById("result");
    result.textContent = "";
    result.classList.remove("show");
  }
  