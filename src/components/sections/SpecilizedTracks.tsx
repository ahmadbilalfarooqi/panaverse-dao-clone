import React from "react";
import Wrapper from "../shared/Wrapper";

const SpecilizedTracks = () => {
  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-2xl lg:text-5xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-sm md:text-xl text-slate-600">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
        <div className="mt-10">
          {/* Content Left */}
          <div className="shadow-xl rounded-xl border-slate-200 border py-8 px-8">
            <h4 className="text-teal-700 text-lg">Specialized Program</h4>
            <h3 className="text-2xl font-bold">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h3>
            <p className="text-lg text-slate-600 mt-3">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <button className="text-teal-700 text-xl mt-4 flex gap-x-2 underline underline-offset-2">
              Learn more
              <svg
              className="mt-2.5"
                width="10"
                height="13"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
          {/* Content Right */}
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecilizedTracks;