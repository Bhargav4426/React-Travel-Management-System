import React, { useState, useRef, useEffect, useContext } from 'react';

// Your component implementation
const YourComponent = () => {
  const { headerHeight } = useContext(HeaderContext);
  const overviewSectionRef = useRef(null);
  const bookCardRef = useRef(null);
  const sectionsRef = useRef({
    top: null,
    overview: null,
    room: null,
    amenities: null,
    activities: null,
    gallery: null,
    review: null,
    location: null,
    faqs: null
  });

  const [isBookCardSticky, setIsBookCardSticky] = useState(false);
  const [shouldShowBookNowButton, setShouldShowBookNowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const overview = overviewSectionRef.current;
      const rooms = sectionsRef.current.room;
      
      if (!overview || !rooms || !bookCardRef.current) return;

      // Calculate positions using headerHeight
      const overviewRect = overview.getBoundingClientRect();
      const roomsRect = rooms.getBoundingClientRect();
      
      // Story of Stay section has touched/passed the header
      const storyTouchedHeader = overviewRect.bottom <= headerHeight;
      
      // Room section has completely passed the header (bottom of room section is above header)
      const roomsPassedHeader = roomsRect.bottom <= headerHeight;

      // Make book card sticky when story touches header but rooms haven't completely passed
      if (storyTouchedHeader && !roomsPassedHeader) {
        setIsBookCardSticky(true);
        // Show floating button when book card itself would scroll past header
        // This happens when rooms section top has passed the header
        setShouldShowBookNowButton(roomsRect.top <= headerHeight);
      } else {
        setIsBookCardSticky(false);
        setShouldShowBookNowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerHeight]);

  return (
    <>
      {/* Main Layout Container */}
      <div className="relative flex flex-col lg:flex-row">
        {/* Main Content - Takes full width on mobile, leaves space for booking card on desktop */}
        <div className="w-full lg:w-[calc(100%-380px)] flex flex-col">
          {/* Overview Section with adjacent Book Card */}
          <div className="relative">
            {(hasOverview || hasStory) && (
              <div className="px-4 sm:px-6 pt-6 lg:px-24 flex">
                {/* Story of Stay content */}
                <div className="flex-1">
                  <div ref={overviewSectionRef} style={{ scrollMarginTop: "110px" }}>
                    <p className="text-lg sm:text-xl lg:text-2xl font-poppins font-[500] lg:px-3">Story of Stay</p>
                    {hasOverview ? (
                      <>
                        <div className="content-html text-[#222222] font-[400] font-poppins text-xs sm:text-sm lg:text-base">
                          {showOverviewFull ? (
                            <SafeHTML html={overviewContent} />
                          ) : (
                            <SafeHTML html={truncateHTML(overviewContent, 1022)} />
                          )}
                        </div>
                        <button
                          onClick={() => setShowOverviewFull(!showOverviewFull)}
                          className="text-[#DE1587] text-sm lg:text-base underline"
                        >
                          {showOverviewFull ? "< Show less" : "Show more >"}
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="content-html text-[#222222] font-[400] font-poppins text-xs sm:text-sm lg:text-base">
                          <SafeHTML html={storyPreview} />
                        </div>
                        <button
                          onClick={() => setStoryModalOpen(true)}
                          className="text-[#DE1587] text-sm lg:text-base underline lg:px-3"
                        >
                          Show more
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Rooms Section */}
          <div 
            ref={(el) => (sectionsRef.current["room"] = el)}
            className="pt-6 px-4 sm:px-6 lg:px-14"
          >
            {/* Title - stays aligned with other sections */}
            <p className="text-lg sm:text-xl lg:text-2xl font-[500] font-poppins px-2 lg:px-12 mb-4">
              Rooms
            </p>
            {/* Rooms container - expanded width */}
            <div 
              className="px-6 lg:pl-12 lg:-mr-[100px] lg:w-[calc(100%+20px)]" 
              style={{ scrollMarginTop: "155px" }}
            >
              <Rooms
                stayDetails={stayDetails}
                onRoomQuantityChange={handleRoomQuantityChange}
                checkIn={checkIn}
                checkOut={checkOut}
              />
            </div>
          </div>
        </div>

        {/* Book Card Container - positioned relative to layout */}
        <div 
          ref={bookCardRef}
          className={`
            hidden lg:block
            ${isBookCardSticky ? 'fixed' : 'absolute'}
            right-12
            w-[350px]
            transition-all duration-300
            z-40
          `}
          style={{
            top: isBookCardSticky 
              ? `${headerHeight + 20}px` 
              : overviewSectionRef.current 
                ? `${overviewSectionRef.current.offsetTop}px` 
                : 'auto'
          }}
        >
          <BookCard
            stayDetails={stayDetails}
            checkIn={checkIn}
            checkOut={checkOut}
            setCheckIn={setCheckIn}
            selectedRooms={selectedRooms}
            setCheckOut={setCheckOut}
            scrollToRooms={scrollToRooms}
          />
        </div>
      </div>

      {/* Floating Book Now Button (shown when book card would scroll past header) */}
      {shouldShowBookNowButton && (
        <div className="hidden lg:block fixed right-4 z-40" style={{ top: '50%', transform: 'translateY(-50%)' }}>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#DE1587] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#C01078] transition-colors"
          >
            Book Now
          </button>
        </div>
      )}
    </>
  );
};

export default YourComponent;