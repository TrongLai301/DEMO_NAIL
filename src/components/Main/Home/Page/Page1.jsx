import "./Page.css";

export default function Page1() {
  return (
    <div className="py-10">
      <div className="text-black text-4xl">
        <span>
          <i>Featured story</i>
        </span>
      </div>
      <div className="">
        <div className=" featured1 frame1"></div>
        <div className="flex items-center justify-center">
          <div className="w-280 p-5 featured3 frame3 frame flex flex-row">
            <div className="w-2/7 p-10 featured3 frame3 frame">
              <ul className="flex flex-col gap-10">
                <li className="flex flex-row items-center gap-4">
                  <span>Number. 01</span>
                  <div>
                    <img
                      className="pageImg-edit"
                      src="src/assets/Images/82828123.jpg"
                      alt=""
                    />
                  </div>
                </li>
                <li className="flex flex-row items-center gap-4">
                  <span>Number. 02</span>
                  <div>
                    <img
                      className="pageImg-edit"
                      src="src/assets/Images/82828123.jpg"
                      alt=""
                    />
                  </div>
                </li>
                <li className="flex flex-row items-center gap-4">
                  <span>Number. 03</span>
                  <div>
                    <img
                      className="pageImg-edit"
                      src="src/assets/Images/82828123.jpg"
                      alt=""
                    />
                  </div>
                </li>
                <li className="flex flex-row items-center gap-4">
                  <span>Number. 04</span>
                  <div>
                    <img
                      className="pageImg-edit"
                      src="src/assets/Images/82828123.jpg"
                      alt=""
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-5/7 flex flex-row p-10 justify-between">
              <div>
                <img
                  src="src/assets/Images/demoImg1.png"
                  alt=""
                  className="imageDemo1"
                />
              </div>
              <div className=" w-70 flex flex-col justify-center ">
                <div className="flex flex-col gap-10">
                  <span className="text-3xl">Personal history</span>
                  <span>
                    She is a famous artist in UK. She was born at ../../.... in VietNam. She is word an UK. She know for some artwork in nail...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" featured1 frame1"></div>
      </div>
    </div>
  );
}
