let temp = 9;
let tempSource = "celcius";
let converTo = "fahrenheit";

if (typeof temp !== "number") {
  console.log('temp "harus angka"');
} else {
  // ===== CELCIUS =====
  if (tempSource === "celcius") {
    if (converTo === "fahrenheit") {
      let F = temp * (9 / 5) + 32;
      console.log(F);
    } else if (converTo === "kelvin") {
      let K = temp + 273.15;
      console.log(K);
    } else if (converTo === "reamur") {
      let R = (4 / 5) * temp;
      console.log(R);
    }

    // ===== FAHRENHEIT =====
  } else if (tempSource === "fahrenheit") {
    if (converTo === "celcius") {
      let C = (temp - 32) * (5 / 9);
      console.log(C);
    } else if (converTo === "reamur") {
      let R = (temp - 32) * (4 / 9);
      console.log(R);
    } else if (converTo === "kelvin") {
      let K = (temp - 32) * (5 / 9) + 273.15;
      console.log(K);
    }

    // ===== KELVIN =====
  } else if (tempSource === "kelvin") {
    if (converTo === "celcius") {
      let C = temp - 273.15;
      console.log(C);
    } else if (converTo === "fahrenheit") {
      let F = (temp - 273.15) * (9 / 5) + 32;
      console.log(F);
    } else if (converTo === "reamur") {
      let R = (temp - 273.15) * (4 / 5);
      console.log(R);
    }

    // ===== REAMUR =====
  } else if (tempSource === "reamur") {
    if (converTo === "celcius") {
      let C = (5 / 4) * temp;
      console.log(C);
    } else if (converTo === "fahrenheit") {
      let F = (temp * 9) / 4 + 32;
      console.log(F);
    } else if (converTo === "kelvin") {
      let K = (temp * 5) / 4 + 273.15;
      console.log(K);
    }
  }
}
