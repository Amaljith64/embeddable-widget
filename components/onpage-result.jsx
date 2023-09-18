import React from 'react'
import {Progress} from "@nextui-org/react"; 

const OnpageResults = ({data}) => {

  const categoryGroupsArray = Object.values(data?.categoryGroups || {});
  return (
    <>
    <section className="text-gray-700 body-font">
  <div className="container px-10   py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20 items-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">On Page Result</h1>
      <Progress
      label={data?.categories?.performance?.title}
      size="lg"
      value={data?.categories?.performance?.score * 100}
      maxValue={100}
      color="warning"
      showValueLabel={true}
      className="max-w-2xl"
    />
    </div>
    <div className="flex flex-wrap -m-2">

       
      

    {categoryGroupsArray.map((group, index) => (
              <div key={index} className="p-2 lg:w-1/4 md:w-1/3 w-full">
                <div className="h-full flex items-center border-gray-300 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">{group.title}</h2>
                    <p className="text-gray-500 overflow-y-hidden max-h-24">{group.description}</p>
                  </div>
                </div>
              </div>
            ))}
    </div>
  </div>
</section>
      
    </>
  )
}

export default OnpageResults
