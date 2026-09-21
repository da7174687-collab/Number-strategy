const phoneInput = document.querySelector("#phone");
const lookupBtn = document.querySelector("#lookupBtn");
const result = document.querySelector("#result");
const errorBox = document.querySelector("#error");

const fields = {
  formatted: document.querySelector("#formatted"),
  country: document.querySelector("#country"),
  countryCode: document.querySelector("#countryCode"),
  lineType: document.querySelector("#lineType"),
  carrier: document.querySelector("#carrier"),
  timezone: document.querySelector("#timezone"),
  validBadge: document.querySelector("#validBadge"),
  status: document.querySelector("#status")
};

// Static-site demo fallback. For production, connect a legitimate phone-number
// intelligence API from a server/edge function. Never put secret API keys here.
const demoData = {
  "+919876543210": {
    formatted: "+91 98765 43210", country: "India", code: "IN (+91)",
    type: "Mobile", carrier: "Demo result", timezone: "Asia/Kolkata"
  }
};

function clean(v){ return v.replace(/[^\d+]/g,""); }

function lookupDemo(raw){
  const normalized = clean(raw);
  if(!normalized) throw new Error("Enter a mobile number first.");
  if(!normalized.startsWith("+")) throw new Error("Please use international format, starting with + and country code.");
  if(normalized.length < 8 || normalized.length > 16) throw new Error("That number format does not look valid.");
  return demoData[normalized] || {
    formatted: normalized,
    country: "Use an API for live metadata",
    code: "—",
    type: "Not verified",
    carrier: "Not available in demo mode",
    timezone: "Not available"
  };
}

function render(data){
  fields.formatted.textContent = data.formatted;
  fields.country.textContent = data.country;
  fields.countryCode.textContent = data.code;
  fields.lineType.textContent = data.type;
  fields.carrier.textContent = data.carrier;
  fields.timezone.textContent = data.timezone;
  fields.validBadge.textContent = data.type === "Not verified" ? "● Demo / not verified" : "● Number format accepted";
  fields.status.textContent = "LOOKUP COMPLETE";
  result.classList.remove("hidden");
  result.scrollIntoView({behavior:"smooth",block:"start"});
}

lookupBtn.addEventListener("click", ()=>{
  errorBox.textContent = "";
  try { render(lookupDemo(phoneInput.value)); }
  catch(e){ errorBox.textContent = e.message; }
});

phoneInput.addEventListener("keydown", e => {
  if(e.key === "Enter") lookupBtn.click();
});
