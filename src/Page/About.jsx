import React from 'react'

function About() {
  return (
    <>
      <>
        <section className="bg-blue-100 py-16 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              About FashionHub
            </h1>
            <p className="text-gray-700 text-lg"> 
              Where style meets confidence — discover our story, passion, and purpose.
            </p>
          </div>
        </section>
        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Journey</h2>
              <p className="text-gray-700 leading-relaxed">
                FashionHub was founded with a simple mission — to empower people
                through style. We believe that fashion is more than clothes; it’s a
                way to express who you truly are. From humble beginnings in a small
                studio, we’ve grown into a global platform for modern, sustainable,
                and inclusive fashion.
              </p>
            </div>
            <div className="h-64 rounded" >
              <img className='h-[300px]' src="https://st.depositphotos.com/1016231/4630/i/450/depositphotos_46309733-stock-photo-three-young-male-fashion-metraseksuals.jpg" alt="" />
            </div>
          </div>
        </section>
        {/* Our Vision Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h2>
            <p className="text-gray-700 text-lg">
              We aim to redefine fashion by making it sustainable, inclusive, and
              truly personal. Our collections are thoughtfully curated to cater to
              every body type, every mood, and every occasion.
            </p>
          </div>
        </section>
        {/* Philosophy Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="h-74 rounded" >
              <img src="https://t4.ftcdn.net/jpg/02/47/28/81/360_F_247288104_VrXGHpWlVzR67XPAZawlejdC8uvVNw6j.jpg" alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Fashion That Fits All
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Whether you're into bold streetwear, minimalist styles, or timeless
                classics — we’ve got something for you. We celebrate diversity in all
                forms and ensure our styles reflect real people, real bodies, and real
                beauty.
              </p>
            </div>
          </div>
        </section>
      </>

    </>
  )
}

export default About