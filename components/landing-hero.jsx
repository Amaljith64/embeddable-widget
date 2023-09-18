"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";

export const LandingHero = (props) => {
  const { handleSubmit, handleUrlChange, url, loading } = props;

  
  return (
    <section className="text-gray-600 body-font lg:mt-20 lg:my-56">
      <div className="container mx-auto flex flex-col px-5 lg:py-24 justify-center items-center">
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 font-extrabold text-gray-900">
            Get a Free SEO Audit Report
          </h1>
          <p className="text-sm md:text-xl font-light text-zinc-400 mb-4">
            Paste the link you need to check.
          </p>

          <div className="flex w-full justify-center items-end mt-2">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <Input
                type="text"
                value={url}
                onChange={handleUrlChange}
                label="URL"
              />
            </div>
            <Button
              isLoading={loading}
              onClick={handleSubmit}
              className="mb-1 text-white bg-indigo-500 border-0 py-6 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
