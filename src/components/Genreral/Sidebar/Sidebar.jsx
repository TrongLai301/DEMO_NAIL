import "./Sidebar.css"
export default function Sidebar() {
  return (
    <div className="flex justify-center pt-10">
      <div className="w-280 flex flex-col justify-center gap-8 mb-10">
        <div className="flex flex-row justify-between">
          <ul className="flex flex-row gap-4">
            <li className="hover-up">
              <a href="https://www.instagram.com/p/C7DFtLmvtBk/" target="_blank" className="hover-opacity">
                <img src="src/assets/Images/Instagram.png" alt="..."></img>
              </a>
            </li>
            <li className="hover-up ">
              <a href="" className="hover-opacity">
                <img src="src/assets/Images/Facebook.png" alt="..."></img>
              </a>
            </li>
            <li className="hover-up ">
              <a href="" className="hover-opacity">
                <img src="src/assets/Images/Tiktok.png" alt="..."></img>
              </a>
            </li>
            <li className="hover-up ">
              <a href="" className="hover-opacity">
                <img src="src/assets/Images/Pinterest.png" alt="..."></img>
              </a>
            </li>
            <li className="hover-up ">
              <a href="" className="hover-opacity">
                <img src="src/assets/Images/Youtube.png" alt="..."></img>
              </a>
            </li>
          </ul>
          <div className="flex flex-row w-1/4">
            <input
              className="border border-gray-300 pl-2 pr-6 py-1 placeholder:text-gray-500 text-gray-500"
              type="text"
              placeholder="Search..."
            />
            <div className="w-3/4 flex flex-row justify-center items-center">
              <img
                className="w-1/3 cart"
                src="src/assets/Images/solar--cart-4-outline.png"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/5">
            <img src="src/assets/Images/NamePage.png" alt="..."></img>
          </div>
        </div>
      </div>
    </div>
  );
}
