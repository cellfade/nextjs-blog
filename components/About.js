import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpg"
import appimage1 from "../public/appimage1.jpg"
import appimage2 from "../public/appimage2.jpg"
import appimage3 from "../public/appimage3.jpg"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        {/* <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hello there,
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            My name is cellfade! I am a product designer by day and a developer/digital artist by night. I have 6+ years experience in product design and ux/ui design, but have recently focused on service design at enterprise-scale. Classically trained in traditional fine art creation, I am constantly exploring the unfolding digital environment around us.
                        </p>
                    </div>
                </div> */}
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={appimage1}
                        alt="UX/UI design mock-up 1"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={appimage2}
                        alt="UX/UI design mock-up 2"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={appimage3}
                        alt="UX/UI design mock-up 3"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;
