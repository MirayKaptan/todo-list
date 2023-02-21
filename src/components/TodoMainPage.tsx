import React from "react";
import PinIcon from "@/assets/PinIcon";
import ArrowIcon from "@/assets/ArrowIcon";
import QuoteIcon from "@/assets/QuoteIcon";

const TodoMainPage = () => {
  return (
    <>
      <div
        style={{ top: "100px", bottom: "62px" }}
        className="absolute bg-white rounded-lg mx-4 right-0 left-0"
      >
        <div
          style={{ top: "0", bottom: "80px" }}
          className="absolute w-full overflow-auto"
        >
          <div className="h-10 mt-4 mb-6">
            <p className="h-5 not-italic font-semibold text-lg leading-5 text-center text-custom-blue">
              To Do List
            </p>
            <span
              style={{
                background: "rgba(255, 121, 100, 1)",
              }}
              className="flex w-40 h-1 mt-4 mx-auto"
            ></span>
          </div>
          <hr style={{ marginTop: "-25px" }} />
          <br />
          <div className="mb-4 mx-4 flex flex-col">
            <div className="flex items-center">
              <PinIcon fill="#FF7964" />
              <p
                style={{
                  color: "rgba(255, 121, 100, 1)",
                }}
                className="w-24 h-5 not-italic font-normal text-sm leading-5 mx-3"
              >
                Pin on the top
              </p>
            </div>

            <div className="z-20">
              <br />
              <div className="mb-8">
                Wıll be edited
                {/* {todos?.map((todo: ToDo, index: any) =>
                  todo?.pinned ? <Task key={index} todo={todo} /> : null
                )} */}
              </div>
              <hr />
              <br />

              <div>
                will be edited
                {/* {todos?.map((todo: ToDo, index: any) =>
                  !todo?.pinned ? <Task key={index} todo={todo} /> : null
                )} */}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ bottom: "62px" }}
          className="fixed bg-white bottom-0 h-20 left-4 right-4 rounded-lg"
        >
          <button className="absolute flex bottom-0 left-0 right-0 h-12 rounded mx-4 my-4 bg-sky-400">
            <span className="mx-4 my-auto">
              <QuoteIcon />
            </span>
            <p className="my-auto h-5 not-italic font-normal text-lg leading-5 text-white">
              Add a task
            </p>
            <span className="ml-auto my-auto mr-4">
              <ArrowIcon />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoMainPage;
