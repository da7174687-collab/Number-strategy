# NumberScope — GitHub Pages Website

A polished, privacy-respecting mobile-number information dashboard.

## What it does
- Accepts an international-format phone number.
- Shows a polished result dashboard.
- Demo mode includes a sample India number.
- Designed to be connected to a legitimate phone-number metadata API.

## What it intentionally does not do
A phone number alone cannot legitimately reveal a person's live GPS location. This project does not attempt covert tracking, SIM tracking, tower triangulation, or unauthorized device-location access.

For a real location-sharing product, use an explicit consent flow:
1. The device owner signs in.
2. The owner grants browser/app location permission.
3. The owner starts a location-sharing session.
4. The server stores only the minimum location data needed.
5. The owner can stop sharing at any time.

## Deploy on GitHub Pages
1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, and `script.js`.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/root`.
5. Save and open the generated Pages URL.

## Connecting a real number metadata API
Do not place a private API key in `script.js` because GitHub Pages is public.

Use a backend or serverless function, for example:
`browser → your serverless endpoint → phone-number API`

Return only non-sensitive fields that your application is permitted to display, such as country, carrier, line type and validation status.
