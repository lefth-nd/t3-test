import { serializeToString } from "xmlserializer";
import { JSDOM } from "jsdom";
const svgCode = `<svg id="face" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 200 200" >
	  <circle id="face-circle" cx="100" cy="100" r="80" fill="yellow" stroke="black" strokeWidth="2" />
	  <circle id="face-path" d=""  />
    <circle id="left-eye" cx="75" cy="80" r="10" fill="black" />
    <circle id="right-eye" cx="125" cy="80" r="10" fill="black" />
    <path id="mouth" d="M70 130 Q100 160 130 130" fill="black" stroke="black" strokeWidth="3" />
  </svg> `;

const dom = new JSDOM(svgCode);
const document = dom.window.document;

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomElement = (arr: string[]) => {
  arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;
};

function manipulateFace() {
  const faceElement = document.getElementById("face");
  const mouth = document.getElementById("mouth");
  const leftEye = document.getElementById("left-eye");
  const rightEye = document.getElementById("right-eye");
  const faceCircle = document.getElementById("face-circle");

  if (faceElement && mouth && leftEye && rightEye && faceCircle) {
    const gray = "#" + Math.floor(Math.random() * 16777215).toString(16);
    faceElement.style.backgroundColor = gray;

    leftEye.setAttribute("cx", getRandomInt(70, 80).toString());
    rightEye.setAttribute("cx", getRandomInt(120, 130).toString());
    leftEye.setAttribute("cy", getRandomInt(70, 90).toString());
    rightEye.setAttribute("cy", getRandomInt(70, 90).toString());
    const randomColorA =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    leftEye.setAttribute("fill", randomColorA);
    const randomColorB =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    rightEye.setAttribute("fill", randomColorB);
    const eyeSizeL = getRandomInt(10, 25);
    const eyeSizeR = getRandomInt(10, 25);
    leftEye.setAttribute("r", eyeSizeL.toString());
    rightEye.setAttribute("r", eyeSizeR.toString());

    const randomColorC =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    mouth.setAttribute("stroke", randomColorC);
    const size = getRandomInt(2, 30);
    mouth.setAttribute("stroke-width", size.toString());

    const rx = getRandomInt(60, 200);
    const ry = getRandomInt(10, 250);
    const rr = getRandomInt(130, 180);
    const randomColorD =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    faceCircle.setAttribute("cx", rx.toString());
    faceCircle.setAttribute("cy", ry.toString());
    faceCircle.setAttribute("fill", randomColorD);
    faceCircle.setAttribute("r", rr.toString());

    const randomX1 = getRandomInt(20, 180);
    const randomY1 = getRandomInt(100, 140);
    const randomX2 = getRandomInt(100, 120);
    const randomY2 = getRandomInt(100, 160);
    const randomQ = getRandomInt(70, 100);
    const innerMouth = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const mouthPath =
      "M" +
      randomX1.toString() +
      " " +
      randomY1.toString() +
      " Q" +
      randomQ.toString() +
      " " +
      randomY2.toString() +
      " " +
      randomX2.toString() +
      " " +
      randomY1.toString();
    mouth.setAttribute("d", mouthPath);
    mouth.setAttribute("fill", innerMouth.toString());
  }
}

function convertSVGtoPNG(
  svgElement: HTMLElement
  //callback: (pngDataUrl: string) => void
) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const svgXml = serializeToString(svgElement);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const imagesrc =
    "data:image/svg+xml;base64," + Buffer.from(svgXml).toString("base64");
  return imagesrc;
}

export default function getFace() {
  const svgElement = document.getElementById("face");
  manipulateFace();
  if (svgElement) {
    const data = convertSVGtoPNG(svgElement);
    return data;
  }
}
