"use client";

import { useRef, useEffect } from "react";
import cardBg from "../../public/backgrounds/speaker-card-bg.webp"
import { Speaker_data } from "@/data/SpeakersData.js";
import { mapRange, hrScrollIntoView, vrScrollIntoView, SplitText, scrollNext, scrollPrevious, LeftArrow, RightArrow } from "./SpeakerCards/Support";



function cardsScrollLogic() {
    //Loop through the children of the card cont and check for its bounds; if its within bounds, its the currently active card;
    [].slice.call(cardContElm.children).forEach(function (ele, index) {
        //!!The inactive cards are scaled down, so for accurate checking; we only scale a child element thus keeping the parent same size;
        let cardCont = ele.getElementsByClassName("sub-card-cont")[0];
        //Check for bounds; if with in bound set the currIndexCard;
        if (Math.abs(ele.getBoundingClientRect().left - cardContElm.getBoundingClientRect().left) < 30) {
            currCardIndex.current = index;
            cardCont.style.transform = "scale(1)";
            cardCont.style.transitionDelay = "0s"
            //When the cards are scrolled; scroll the left container to the same index;
            vrScrollIntoView(leftScroll.current, leftScroll.current.children[index]);
        }
    });
    //For resizing the cards w.r.t its position;
    [].slice.call(cardContElm.children).forEach(function (ele, index) {
        let cardCont = ele.getElementsByClassName("sub-card-cont")[0];
        const leftScrollClsList = leftScroll.current.children[index].classList,
            cardElmClsList = ele.classList;
        if (index != currCardIndex.current) {
            let size = (index > currCardIndex.current ?
                mapRange(index, currCardIndex.current, Speaker_data.length, 0.9, 0.7) :
                mapRange(index, currCardIndex.current, 0, 0.9, 0.7)
            );

            let delay = (index > currCardIndex.current ?
                mapRange(index, currCardIndex.current, Speaker_data.length, 0.1, 0.5) :
                mapRange(index, currCardIndex.current, 0, 0.1, 0.5)
            );

            cardCont.style.transitionDelay = delay + "s";

            cardCont.style.transform = `scale(${size})`;
            leftScrollClsList.remove("active");
            cardElmClsList.remove("active");
        } else {
            leftScrollClsList.add("active");
            cardElmClsList.add("active");
        }
    });
}


export default function Speaker() {

    let currCardIndex = useRef(0);
    const leftScroll = useRef(null),
        cardsScrollElm = useRef(null),
        cardsParentElm = useRef(null),
        lastScrollTime = useRef(null),
        scrollCoolDownTime = 400, //in ms
        parentHasMouseOver = useRef(false);

    useEffect(() => {
        let timer = null,
            cardContElm = cardsScrollElm.current;

        function doScrollEvent() {
            clearTimeout(timer);
            timer = setTimeout(cardsScrollLogic, 100);
        }
        
        //Detect scroll for the card container;
        cardContElm.addEventListener('scroll', doScrollEvent);
        //Do the necessary changes on first load
        doScrollEvent();


        //Code for keyboard navigation, works when user has mouse over on the cards element.
        cardsParentElm.current.addEventListener('mouseover', () => {
            parentHasMouseOver.current = true;
        })
        cardsParentElm.current.addEventListener('mouseleave', () => {
            parentHasMouseOver.current = false;
        })

        window.onkeydown = (e) => {
            if (!parentHasMouseOver.current) {
                return false;
            }
            switch (e.key) {
                case 'ArrowLeft':
                    scrollPrevious(cardsScrollElm, currCardIndex, lastScrollTime, scrollCoolDownTime, Speaker_data)
                    break;
                case 'ArrowRight':
                case ' ':
                    scrollNext(cardsScrollElm, currCardIndex, lastScrollTime, scrollCoolDownTime, Speaker_data)
                    break;
            }
        };

    }, []);

    return <section className="w-full p-20 lg:pr-0 max-md:p-10 max-md:pr-0 max-sm:p-0">
        <h1 className="max-sm:p-10 text-5xl font-poppins font-thin leading-loose">Speakers</h1>
        <br /><br />
        {/* Speaker cards start here */}
        <div className="flex flex-[0_0_auto] w-full h-[600px] max-md:flex-col-reverse max-md:h-[auto]" ref={cardsParentElm}>
            {/* Name and description container */}
            <div
                className="relative w-[30%] h-[100%] max-lg:w-[40%] max-md:w-[100%] max-md:mt-10 max-md:h-[600px] max-sm:h-[600px] max-sm:px-10">
                {/* This element prevents scrolling */}
                <div className="absolute w-full h-full z-20"></div>
                <div className="w-full h-full flex flex-col scroll-snap-y scroll-snap-start hide-scrollbar overflow-hidden details-container" ref={leftScroll}>
                    {Speaker_data.map((speaker, index) => {
                        return <div key={index + 50} className="flex-grow max-w-[100%] min-h-full flex flex-col justify-center max-md:justify-start">
                            <h2 className="font-poppins text-5xl font-extrabold leading-[100%] flex flex-col uppercase">
                                <SplitText text={speaker.name} />
                            </h2>
                            <br />
                            <div className="flex items-center ">
                                <p className="leading-[137.5%] font-poppins font-light">
                                    {speaker.description}
                                </p>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            {/*Image and navigation components*/}
            <div className="w-[70%] max-h-full flex flex-col gap-10 justify-end pl-5 max-lg:w-[60%] max-md:w-[100%] max-md:pl-0">
                {/*Image card container*/}
                <div className="w-full flex items-end overflow-x-scroll overflow-y-hidden scroll-snap-x scroll-snap-start hide-scrollbar last-scroll-padd" ref={cardsScrollElm}>
                    {
                        Speaker_data.map((speaker, index) => {
                            return (
                                <div key={index} onClick={() => {
                                    hrScrollIntoView(cardsScrollElm.current, cardsScrollElm.current.children[index]);
                                }}
                                    className="flex-[0_0_auto] w-[380px] max-sm:w-[250px] aspect-[10/13] relative flex items-end justify-center select-none p-5 overflow-visible cards-container">
                                    <div className="flex justify-center w-full h-full relative sub-card-cont origin-bottom">
                                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[15px] card-bg-container">
                                            <img src={cardBg} className="h-full" />
                                        </div>
                                        <img src={speaker.image} className="absolute bottom-0 min-w-[140%] select-none" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* Navigation */}
                <div className="flex gap-8 pl-[20px] items-center">
                    <a onClick={() => { scrollPrevious(cardsScrollElm, currCardIndex, lastScrollTime, scrollCoolDownTime, Speaker_data) }}><LeftArrow /></a>
                    <a onClick={() => { scrollNext(cardsScrollElm, currCardIndex, lastScrollTime, scrollCoolDownTime, Speaker_data) }}><RightArrow /></a>
                    <span className="h-[0.5px] w-[60%] max-sm:w-[50%] bg-white"></span>
                </div>
            </div>
        </div>
    </section>
}

// export function SpeakerCards() {


//     return <section className="w-full p-20 lg:pr-0 max-md:p-10 max-md:pr-0 max-sm:p-0">
//         <h1 className="max-sm:p-10 text-5xl font-poppins font-thin leading-loose">Speakers</h1>
//         <br /><br />
//         {/* Speaker cards start here */}
//         <div className="flex flex-[0_0_auto] w-full h-[600px] max-md:flex-col-reverse max-md:h-[auto]" ref={cardsParentElm}>
//             {/* Name and description container */}
//             <div
//                 className="relative w-[30%] h-[100%] max-lg:w-[40%] max-md:w-[100%] max-md:mt-10 max-md:h-[600px] max-sm:h-[600px] max-sm:px-10">
//                 {/* This element prevents scrolling */}
//                 <div className="absolute w-full h-full z-20"></div>
//                 <div className="w-full h-full flex flex-col scroll-snap-y scroll-snap-start hide-scrollbar overflow-hidden details-container" ref={leftScroll}>
//                     {Speaker_data.map((speaker, index) => {
//                         return <div key={index + 50} className="flex-grow max-w-[100%] min-h-full flex flex-col justify-center max-md:justify-start">
//                             <h2 className="font-poppins text-5xl font-extrabold leading-[100%] flex flex-col uppercase">
//                                 <SplitText text={speaker.name} />
//                             </h2>
//                             <br />
//                             <div className="flex items-center ">
//                                 <p className="leading-[137.5%] font-poppins font-light">
//                                     {speaker.description}
//                                 </p>
//                             </div>
//                         </div>
//                     })}
//                 </div>
//             </div>

//             {/*Image and navigation components*/}
//             <div className="w-[70%] max-h-full flex flex-col gap-10 justify-end pl-5 max-lg:w-[60%] max-md:w-[100%] max-md:pl-0">
//                 {/*Image card container*/}
//                 <div className="w-full flex items-end overflow-x-scroll overflow-y-hidden scroll-snap-x scroll-snap-start hide-scrollbar last-scroll-padd" ref={cardsScrollElm}>
//                     {
//                         Speaker_data.map((speaker, index) => {
//                             return (
//                                 <div key={index} onClick={() => {
//                                     hrScrollIntoView(cardsScrollElm.current, cardsScrollElm.current.children[index]);
//                                 }}
//                                     className="flex-[0_0_auto] w-[380px] max-sm:w-[250px] aspect-[10/13] relative flex items-end justify-center select-none p-5 overflow-visible cards-container">
//                                     <div className="flex justify-center w-full h-full relative sub-card-cont origin-bottom">
//                                         <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[15px] card-bg-container">
//                                             <img src={cardBg} className="h-full" />
//                                         </div>
//                                         <img src={speaker.image} className="absolute bottom-0 min-w-[140%] select-none" />
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//                 {/* Navigation */}
//                 <div className="flex gap-8 pl-[20px] items-center">
//                     <a onClick={() => { scrollPrevious(cardsScrollElm, currCardIndex, lastScrollTime, scrollCoolDownTime, Speaker_data) }}><LeftArrow /></a>
//                     <a onClick={() => { scrollNext(cardsScrollElm, currCardIndex, lastScrollTime, scrollCoolDownTime, Speaker_data) }}><RightArrow /></a>
//                     <span className="h-[0.5px] w-[60%] max-sm:w-[50%] bg-white"></span>
//                 </div>
//             </div>
//         </div>
//     </section>
// }

