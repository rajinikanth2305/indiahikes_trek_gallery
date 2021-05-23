import React from "react";
import { RichText } from "prismic-reactjs";
import { whyTrekWithStyles } from "styles";
import Image from "next/image";
/**
 * WhyTrek Slice Components
 */
const WhyTrek = ({ slice }) => {
  const title1 = slice.primary.title1;
  const title2 = slice.primary.title2;
  const title3 = slice.primary.title3;
  const title4 = slice.primary.title4;

  //console.log(JSON.stringify(slice.primary));

  return (
    <>
      {/* <div id="Group_3070">
		<svg class="Rectangle_539">
			<rect id="Rectangle_539" rx="0" ry="0" x="0" y="0" width="360" height="556">
			</rect>
		</svg>
		<div id="Why_trek_with_indiahikes">
			<span>Why trek with indiahikes</span>
		</div>
		<div id="Repeat_Grid_51">
			<div id="Group_2724" class="Group_2724">
				<svg class="Rectangle_189">
					<rect id="Rectangle_189" rx="0" ry="0" x="0" y="0" width="154" height="160">
					</rect>
				</svg>
				<div id="A_team_you_can_actually_trust_">
					<span>A team you can actually trust safety with</span>
				</div>
				<img id="Icons_Outline_Poles" src="Icons_Outline_Poles.png" srcset="Icons_Outline_Poles.png 1x, Icons_Outline_Poles@2x.png 2x"/>
					
			</div>
			<div id="Group_2724_ex" class="Group_2724">
				<svg class="Rectangle_189_ey">
					<rect id="Rectangle_189_ey" rx="0" ry="0" x="0" y="0" width="154" height="160">
					</rect>
				</svg>
				<div id="A_team_you_can_actually_trust__ez">
					<span>A team you can actually trust safety with</span>
				</div>
				<img id="Icons_Outline_Poles_e" src="Icons_Outline_Poles_e.png" srcset="Icons_Outline_Poles_e.png 1x, Icons_Outline_Poles_e@2x.png 2x"/>
					
			</div>
			<div id="Group_2724_e" class="Group_2724">
				<svg class="Rectangle_189_e">
					<rect id="Rectangle_189_e" rx="0" ry="0" x="0" y="0" width="154" height="160"></rect>
				</svg>
				<div id="A_team_you_can_actually_trust__e">
					<span>A team you can actually trust safety with</span>
				</div>
				<img id="Icons_Outline_Poles_fa" src="Icons_Outline_Poles_fa.png" srcset="Icons_Outline_Poles_fa.png 1x, Icons_Outline_Poles_fa@2x.png 2x"/>
			</div>
			<div id="Group_2724_fa" class="Group_2724">
				<svg class="Rectangle_189_fa">
					<rect id="Rectangle_189_fa" rx="0" ry="0" x="0" y="0" width="154" height="160">
					</rect>
				</svg>
				<div id="A_team_you_can_actually_trust__fa">
					<span>A team you can actually trust safety with</span>
				</div>
				<img id="Icons_Outline_Poles_fb" src="Icons_Outline_Poles_fb.png" srcset="Icons_Outline_Poles_fb.png 1x, Icons_Outline_Poles_fb@2x.png 2x"/>
			</div>
		</div>
		<svg class="Rectangle_190">
			<rect id="Rectangle_190" rx="0" ry="0" x="0" y="0" width="360" height="4"></rect>
		</svg>
		<style jsx global>{whyTrekWithStyles}</style>
	</div> */}
      <div class="mb-5">
        <div class="container-fluid bg-dark">
          <div class="why_trek_sec container">
            <div class="row">
              <div class="col-lg-7 col-md-12">
                <p class="why_trek_title mb-4">Why trek with indiahikes</p>
              </div>
            </div>
            <div class="row m-d-none">
              <div class="col-lg-3 col-md-6 col-xs-6">
                <div class="bg-white p-4 mb-2">
                  <img
                    src="Icons_Outline_Poles_e.png"
                    srcset="Icons_Outline_Poles_e.png 1x, Icons_Outline_Poles_e@2x.png 2x"
                  />
                  <p class="why_trek_box_title mb-2">
                    A team you can actually trust Your safety with
                  </p>
                  <p class="why_trek_box_desc m-0 m-d-none">
                    Defining trek safety for over a decade, you are with India's
                    safest trekking organization
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-xs-6">
                <div class="bg-white p-4 mb-2">
                  <img
                    src="Icons_Outline_Poles_e.png"
                    srcset="Icons_Outline_Poles_e.png 1x, Icons_Outline_Poles_e@2x.png 2x"
                  />
                  <p class="why_trek_box_title mb-2">
                    A team you can actually trust Your safety with
                  </p>
                  <p class="why_trek_box_desc m-0 m-d-none">
                    Defining trek safety for over a decade, you are with India's
                    safest trekking organization
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-xs-6">
                <div class="bg-white p-4 mb-2">
                  <img
                    src="Icons_Outline_Poles_e.png"
                    srcset="Icons_Outline_Poles_e.png 1x, Icons_Outline_Poles_e@2x.png 2x"
                  />
                  <p class="why_trek_box_title mb-2">
                    A team you can actually trust Your safety with
                  </p>
                  <p class="why_trek_box_desc m-0 m-d-none">
                    Defining trek safety for over a decade, you are with India's
                    safest trekking organization
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-xs-6">
                <div class="bg-white p-4 mb-2">
                  <img
                    src="Icons_Outline_Poles_e.png"
                    srcset="Icons_Outline_Poles_e.png 1x, Icons_Outline_Poles_e@2x.png 2x"
                  />
                  <p class="why_trek_box_title mb-2">
                    A team you can actually trust Your safety with
                  </p>
                  <p class="why_trek_box_desc m-0 m-d-none">
                    Defining trek safety for over a decade, you are with India's
                    safest trekking organization
                  </p>
                </div>
              </div>
            </div>
            <div class="m-view-d-block">
              <div class="d-flex flex-row">
                <div class="">
                  <div class="bg-white p-2 mb-2">
                    <img
                      src="Icons_Outline_Poles_e.png"
                      srcset="Icons_Outline_Poles_e.png 1x, Icons_Outline_Poles_e@2x.png 2x"
                    />
                    <p class="why_trek_box_title mb-2">
                      A team you can actually trust Your safety with
                    </p>
                    <p class="why_trek_box_desc m-0 m-d-none">
                      Defining trek safety for over a decade, you are with
                      India's safest trekking organization
                    </p>
                  </div>
                </div>
                <div class="mx-1"></div>
                <div class="">
                  <div class="bg-white p-2 mb-2">
                    <img
                      src="Icons_Outline_Poles_e.png"
                      srcset="Icons_Outline_Poles_e.png 1x, Icons_Outline_Poles_e@2x.png 2x"
                    />
                    <p class="why_trek_box_title mb-2">
                      A team you can actually trust Your safety with
                    </p>
                    <p class="why_trek_box_desc m-0 m-d-none">
                      Defining trek safety for over a decade, you are with
                      India's safest trekking organization
                    </p>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="">
                  <div class="bg-white p-2 mb-2">
                    <img
                      src="Icons_Outline_Poles_e.png"
                      srcset="Icons_Outline_Poles_e.png 1x, Icons_Outline_Poles_e@2x.png 2x"
                    />
                    <p class="why_trek_box_title mb-2">
                      A team you can actually trust Your safety with
                    </p>
                    <p class="why_trek_box_desc m-0 m-d-none">
                      Defining trek safety for over a decade, you are with
                      India's safest trekking organization
                    </p>
                  </div>
                </div>
                <div class="mx-1"></div>
                <div class="">
                  <div class="bg-white p-2 mb-2">
                    <img
                      src="Icons_Outline_Poles_e.png"
                      srcset="Icons_Outline_Poles_e.png 1x, Icons_Outline_Poles_e@2x.png 2x"
                    />
                    <p class="why_trek_box_title mb-2">
                      A team you can actually trust Your safety with
                    </p>
                    <p class="why_trek_box_desc m-0 m-d-none">
                      Defining trek safety for over a decade, you are with
                      India's safest trekking organization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {whyTrekWithStyles}
        </style>
      </div>
    </>
  );
};

export default WhyTrek;
