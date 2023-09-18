import React from "react";
import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";
import { Spinner } from "@nextui-org/react";

import { Skeleton } from "@nextui-org/react";

const ScoreHero = ({ data, imgUrl, dataloading }) => {

  return (
    <>
      <div className="text-gray-600 body-font ">
        <h1 className="title-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 font-extrabold text-gray-900 text-center">
          Everything You Need To Know
        </h1>
        <p className=" text-center text-lg md:text-xl font-light text-zinc-500 mb-4">
          Results for: {data?.requestedUrl}
        </p>
        <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative">
            <Image
              className=" rounded w-[600px] h-[500px] object-cover object-top "
              alt="hero"
              src={imgUrl}
              // src="https://dummyimage.com/720x600"
              height={500}
              width={600}
            />
            {dataloading === true ? (
              
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner
                label="Hang on, we are analyzing your page..."
                color="warning"
                size="lg"
              />
            </div>
            ): (
              null
            
            )}
          </div>
          <div className=" mx-auto flex flex-col items-center">
            <div className="mb-0">
              {data.length === 0 ? (
                <div className="max-w-[300px] w-full items-center">
                  <div>
                    <Skeleton className="flex rounded-full w-36 h-36" />
                  </div>
                  <div className="w-full flex flex-col gap-2 items-center mt-2">
                    <Skeleton className="h-4 w-24 rounded-lg" />
                  </div>
                </div>
              ) : (
                <CircularProgress
                  aria-label="Loading..."
                  size="lg"
                  value={data?.categories?.performance?.score * 100}
                  color="warning"
                  showValueLabel={true}
                  classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    value: "text-3xl font-semibold",
                  }}
                  label={data?.categories?.performance?.title}
                />
              )}
            </div>
            <div className=" mx-auto flex flex-col items-center">
              <div className="flex flex-row justify-center space-x-10 mt-5">
                <div className="p-4">
                  {data.length === 0 ? (
                    <div className="max-w-[300px] w-full items-center">
                      <div>
                        <Skeleton className="flex rounded-full w-36 h-36" />
                      </div>
                      <div className="w-full flex flex-col gap-2 items-center mt-2">
                        <Skeleton className="h-4 w-24 rounded-lg" />
                      </div>
                    </div>
                  ) : (
                    <CircularProgress
                      aria-label="Loading..."
                      size="lg"
                      value={data?.categories?.accessibility?.score * 100}
                      color="warning"
                      showValueLabel={true}
                      classNames={{
                        svg: "w-36 h-36 drop-shadow-md",
                        value: "text-3xl font-semibold",
                      }}
                      label={data?.categories?.accessibility?.title}
                    />
                  )}
                </div>
                <div className="p-4">
                {data.length === 0 ? (
                    <div className="max-w-[300px] w-full items-center">
                      <div>
                        <Skeleton className="flex rounded-full w-36 h-36" />
                      </div>
                      <div className="w-full flex flex-col gap-2 items-center mt-2">
                        <Skeleton className="h-4 w-24 rounded-lg" />
                      </div>
                    </div>
                  ) : (
                  <CircularProgress
                    aria-label="Loading..."
                    size="lg"
                    value={data?.categories["best-practices"]?.score * 100}
                    color="warning"
                    showValueLabel={true}
                    classNames={{
                      svg: "w-36 h-36 drop-shadow-md",
                      value: "text-3xl font-semibold",
                    }}
                    label={data?.categories["best-practices"]?.title}
                  />
                  )}
                </div>
                <div className="p-4">
                {data.length === 0 ? (
                    <div className="max-w-[300px] w-full items-center">
                      <div>
                        <Skeleton className="flex rounded-full w-36 h-36" />
                      </div>
                      <div className="w-full flex flex-col gap-2 items-center mt-2">
                        <Skeleton className="h-4 w-24 rounded-lg" />
                      </div>
                    </div>
                  ) : (
                  <CircularProgress
                    aria-label="Loading..."
                    size="lg"
                    value={data?.categories?.seo?.score * 100}
                    color="warning"
                    showValueLabel={true}
                    classNames={{
                      svg: "w-36 h-36 drop-shadow-md",
                      value: "text-3xl font-semibold",
                    }}
                    label={data?.categories?.seo?.title}
                  />
                  )}
                </div>
                <div className="p-4">
                {data.length === 0 ? (
                    <div className="max-w-[300px] w-full items-center">
                      <div>
                        <Skeleton className="flex rounded-full w-36 h-36" />
                      </div>
                      <div className="w-full flex flex-col gap-2 items-center mt-2">
                        <Skeleton className="h-4 w-24 rounded-lg" />
                      </div>
                    </div>
                  ) : (
                  <CircularProgress
                    aria-label="Loading..."
                    size="lg"
                    value={data?.categories?.pwa?.score * 100}
                    color="warning"
                    showValueLabel={true}
                    classNames={{
                      svg: "w-36 h-36 drop-shadow-md",
                      value: "text-3xl font-semibold",
                    }}
                    label={data?.categories?.pwa?.title}
                  />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreHero;
