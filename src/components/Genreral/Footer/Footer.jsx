import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer flex flex-col pt-10">
      <div className="flex justify-center">
        <div className="flex flex-row flex-wrap w-280 justify-between">
          <div className="w-60 flex flex-col gap-5">
            <div className="flex items-start color-title">
              <span>Wholesale</span>
            </div>
            <ul className="color-list flex flex-col gap-2">
              <li className="list-hover flex items-start">
                <Link>Wholesale FAQ</Link>
              </li>
              <li className="list-hover flex items-start">
                <Link>Saler</Link>
              </li>
            </ul>
          </div>
          <div className="w-60 flex flex-col gap-5">
            <div className="flex items-start color-title">
              <span>Customer service</span>
            </div>
            <ul className="color-list flex flex-col gap-2">
              <li className="list-hover flex items-start">Contact</li>
              <li className="list-hover flex items-start">Question</li>
              <li className="list-hover flex items-start">Delivery + View + refund</li>
              <li className="list-hover flex items-start">Products assist</li>
              <li className="list-hover flex items-start">Privacy policy</li>
              <li className="list-hover flex items-start">Care and repair products</li>
              <li className="list-hover flex items-start">Covid-19 Information</li>
            </ul>
          </div>
          <div className="w-60 flex flex-col gap-5">
            <div className="flex items-start color-title">
              <span>Get to know Peg & Awl</span>
            </div>
            <ul className="color-list flex flex-col gap-2">
              <li className="list-hover flex items-start">Introduce</li>
              <li className="list-hover flex items-start">Magazine</li>
              <li className="list-hover flex items-start">Instruct</li>
              <li className="list-hover flex items-start">Label</li>
              <li className="list-hover flex items-start">Raw materials</li>
              <li className="list-hover flex items-start">Works</li>
            </ul>
          </div>
          <div className="w-60"></div>
        </div>
      </div>
      <div className="mt-20 color-title credit-title mb-3">
        <span>Copyright © 2025 tiny_canvasez, All rights reserved.</span>
      </div>
    </div>
  );
}
