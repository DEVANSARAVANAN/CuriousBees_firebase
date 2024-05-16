// import React from 'react'
// import avatar2x from '../assets/avatar@2x.png';
// import chevrondown from '../assets/chevrondown.svg';
// import rectangle32x from '../assets/rectangle-3@2x.png';
// import srm from '../assets/SRM.png';
// import group2x from '../assets/group@2x.png';
// import group12x from '../assets/group-1@2x.png';
// import darkThemeSearchDefault from '../assets/dark-theme--search--default.svg';
// import darkThemeScheduleDefault from '../assets/dark-theme--schedule--default.svg';
// import darkThemePollDefault from '../assets/dark-theme--poll--default.svg';
// import darkThemeMediaDefault from '../assets/dark-theme--media--default.svg';
// import darkThemeEmojiDefault from '../assets/dark-theme--emoji--default.svg';
// import avatarMedium12x from '../assets/avatar--medium-1@2x.png';
// // import avatarMedium42x from '../assets/avatar--medium-4@2x.png';
// import downVote2x from '../assets/down-vote@2x.png';
// // import downVote22x from '../assets/down-vote-2@2x.png';
// import placehpolder2x from '../assets/placehpolder@2x.png';
// import placehpolder12x from '../assets/placehpolder-1@2x.png';
// import upvote2x from '../assets/upvote@2x.png';
// // import ellipse2x from '../assets/ellipse@2x.png';
// import rectangle5 from '../assets/rectangle-5.svg';
// import thumbTack2Plain1 from '../assets/thumb-tack-2-plain-1.svg';
// import discussion from '../assets/discussion.svg';
// import share from '../assets/share.svg';

// const Home = () => {
//   return (
//     <div className="desktop-1">
//   <div className="tweet">
//     <div className="divider">
//       <div className="divider1" />
//     </div>
//     <div className="container">
//       <div className="side">
//         <img className="avatar-medium" alt="" />
//       </div>
//       <div className="main">
//         <div className="user">
//           <b className="devon-lane">LiveWire_</b>
//           <div className="marcelosalomao">@LiveWires_</div>
//           <div className="div">·</div>
//           <div className="s">Now</div>
//         </div>
//         <div className="content">
//           <div className="hold-on-i">Hello</div>
//         </div>
//         <div className="media">
//           <img className="container-icon" alt="" />
//         </div>
//         <div className="actions">
//           <div className="action-item">
//             <input className="dark-theme-comment-default" type="checkbox" />
//             <div className="div1">61</div>
//           </div>
//           <div className="action-item1">
//             <img className="dark-theme-retweet-default" alt="" />
//             <div className="div2">12</div>
//           </div>
//           <div className="action-item2">
//             <img className="dark-theme-like-selected" alt="" />
//             <div className="k">6.2K</div>
//           </div>
//           <div className="action-item3">
//             <img className="dark-theme-share-default" alt="" />
//             <div className="div3">61</div>
//           </div>
//         </div>
//         <div className="show-thread">
//           <div className="show-this-thread">Show this thread</div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="spacer">
//     <div className="divider2" />
//   </div>
//   <header className="ribbon">
//     <div className="ribbon-inner">
//       <div className="srm-app-parent">
//         <h2 className="srm-app">SRM APP</h2>
//         <div className="frame-wrapper">
//           <nav className="frame-parent">
//             <div className="home-parent">
//               <div className="home">HOME</div>
//               <div className="frame-child" />
//             </div>
//             <div className="calender">CALENDER</div>
//             <div className="events">EVENTS</div>
//             <div className="profile">PROFILE</div>
//           </nav>
//         </div>
//       </div>
//     </div>
//     <div className="avatar-parent">
//       <img className="avatar-icon" alt="" src={avatar2x} />
//       <div className="chevron-down-wrapper">
//         <img
//           className="chevron-down-icon"
//           alt=""
//           src={chevrondown}
//         />
//       </div>
//     </div>
//   </header>
//   <main className="desktop-1-inner">
//     <section className="frame-group">
//       <div className="frame-container">
//         <div className="frame-div">
//           <div className="frame-parent1">
//             <div className="frame-wrapper1">
//               <div className="frame-parent2">
//                 <div className="profile-wrapper">
//                   <div className="profile1">
//                     <div className="profile-child" />
//                     <div className="profile2">
//                       <b className="srm-university">SRM UNIVERSITY</b>
//                       <div className="freelance-uxui-designer-container">
//                         <p className="freelance-uxui-designer">
//                           Freelance UX/UI designer, 80+ projects
//                         </p>
//                         <p className="in-web-design">
//                           in web design, mobile apps (iOS &amp; android) and
//                           creative projects. Open to offers.
//                         </p>
//                       </div>
//                       <img
//                         className="profile-item"
//                         alt=""
//                         src={rectangle32x}
//                       />
//                       <img
//                         className="ellipse-icon"
//                         alt=""
//                         src={srm}
//                       />
//                       <div className="profile-inner" />
//                       <div className="rectangle-parent">
//                         <img
//                           className="frame-item"
//                           alt=""
//                           src={rectangle32x}
//                         />
//                         <img
//                           className="ellipse-icon1"
//                           loading="lazy"
//                           alt=""
//                           src={srm}
//                         />
//                       </div>
//                       <div className="srm-university-wrapper">
//                         <b className="srm-university1">SRM UNIVERSITY</b>
//                       </div>
//                       <div className="freelance-uxui-designer-80-wrapper">
//                         <div className="freelance-uxui-designer-container1">
//                           <p className="freelance-uxui-designer1">
//                             Freelance UX/UI designer, 80+ projects
//                           </p>
//                           <p className="in-web-design1">
//                             in web design, mobile apps (iOS &amp; android) and
//                             creative projects. Open to offers.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="hashtags">
//                   <div className="hashtags-child" />
//                   <b className="followed-hashtags">Followed hashtags</b>
//                   <div className="line" />
//                   <div className="frame-parent3">
//                     <div className="group-parent">
//                       <button className="group">
//                         <div className="group-child" />
//                         <div className="research">#research</div>
//                       </button>
//                       <button className="group1">
//                         <div className="group-item" />
//                         <div className="research-forum">#research_forum</div>
//                       </button>
//                       <button className="group2">
//                         <div className="group-inner" />
//                         <div className="hr">#hr</div>
//                       </button>
//                     </div>
//                     <div className="group-group">
//                       <button className="group3">
//                         <div className="rectangle-div" />
//                         <div className="userinterface">#userinterface</div>
//                       </button>
//                       <button className="group4">
//                         <div className="group-child1" />
//                         <div className="digital">#digital</div>
//                       </button>
//                     </div>
//                     <div className="group-container">
//                       <button className="group5">
//                         <div className="group-child2" />
//                         <div className="userexperience">#userexperience</div>
//                       </button>
//                       <button className="group6">
//                         <div className="group-child3" />
//                         <div className="ux">#ux</div>
//                       </button>
//                     </div>
//                     <div className="group-parent1">
//                       <button className="group7">
//                         <div className="group-child4" />
//                         <div className="ui">#ui</div>
//                       </button>
//                       <button className="group8">
//                         <div className="group-child5" />
//                         <div className="freelance">#freelance</div>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="articles-wrapper">
//                   <div className="articles">
//                     <div className="articles-child" />
//                     <b className="my-posts">My posts</b>
//                     <div className="line1" />
//                     <div className="frame-parent4">
//                       <div className="frame-parent5">
//                         <div className="group-wrapper">
//                           <img
//                             className="group-icon"
//                             loading="lazy"
//                             alt=""
//                             src={group2x}
//                           />
//                         </div>
//                         <div className="shape-cluster">
//                           <b className="how-i-make">How I make cool designs?</b>
//                           <div className="image-set">
//                             <div className="viewers">6,340 viewers</div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="group-parent2">
//                         <img
//                           className="group-icon1"
//                           loading="lazy"
//                           alt=""
//                           src={group12x}
//                         />
//                         <div className="output-port">
//                           <b className="advices-for-young-container">
//                             <p className="advices-for">Advices for</p>
//                             <p className="young-hr-manager">young HR-manager</p>
//                           </b>
//                           <div className="viewers1">8,123 viewers</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="if-statement">
//               <div className="else-statement">
//                 <div className="search-bar-wrapper">
//                   <div className="search-bar">
//                     <img
//                       className="dark-theme-search-default"
//                       alt=""
//                       src={darkThemeSearchDefault}
//                     />
//                     <input
//                       className="divider3"
//                       placeholder="Search "
//                       type="text"
//                     />
//                   </div>
//                 </div>
//                 <div className="else-statement-inner">
//                   <div className="value-converter-parent">
//                     <div className="value-converter">
//                       <img
//                         className="avatar-medium1"
//                         loading="lazy"
//                         alt=""
//                         src={avatarMedium12x}
//                       />
//                       <div className="align-component-wrapper">
//                         <div className="align-component">
//                           <div className="arrange-component">
//                             <h2 className="whats-on-your">
//                               What’s on your mind?
//                             </h2>
//                           </div>
//                           <div className="actions1">
//                             <img
//                               className="dark-theme-media-default"
//                               loading="lazy"
//                               alt=""
//                               src={darkThemeMediaDefault}
//                             />
//                             <img className="dark-theme-gif-default" alt="" />
//                             <img
//                               className="dark-theme-poll-default"
//                               loading="lazy"
//                               alt=""
//                               src={darkThemePollDefault}
//                             />
//                             <img
//                               className="dark-theme-emoji-default"
//                               loading="lazy"
//                               alt=""
//                               src={darkThemeEmojiDefault}
//                             />
//                             <img
//                               className="dark-theme-schedule-defaul"
//                               loading="lazy"
//                               alt=""
//                               src={darkThemeScheduleDefault}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="stack-component">
//                       <button className="button-primary-medium">
//                         <b className="tweet1">Post</b>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="spacer-wrapper">
//                   <div className="spacer1">
//                     <div className="divider4" />
//                   </div>
//                 </div>
//                 <div className="else-statement-child">
//                   <div className="frame-parent6">
//                     <div className="frame-wrapper2">
//                       <div className="frame-parent7">
//                         <div className="stack-data-structure-parent">
//                           <div className="stack-data-structure">
//                             <img
//                               className="avatar-medium2"
//                               loading="lazy"
//                               alt=""
//                               src={avatarMedium12x}
//                             />
//                           </div>
//                           <div className="linked-list">
//                             <div className="heap">
//                               <h2 className="srm-institue">SRM INSTITUE</h2>
//                               <div className="graph-data-structure">
//                                 <div className="div4">·</div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="tree-data-structure">
//                             <div className="s1">23s</div>
//                           </div>
//                         </div>
//                         <div className="queue-data-structure">
//                           <div className="posted-on-24">
//                             posted on 24 Mar 2024
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="binary-search-tree">
//                       <h2 className="a-website-for">
//                         A Website for helping so and so
//                       </h2>
//                       <div className="an-excellent-platform">
//                         An excellent platform for developing and strengthening
//                         your brand. It can increase your visibility as an
//                         individual, even as it allows you to raise your
//                         company's profile.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="input-filter">
//                   <div className="container1">
//                     <img
//                       className="placehpolder-icon"
//                       loading="lazy"
//                       alt=""
//                       src={placehpolder2x}
//                     />
//                   </div>
//                 </div>
//                 <div className="output-formater">
//                   <div className="value-range">
//                     <div className="condition-checker">
//                       <div className="data-transformer">
//                         <img
//                           className="upvote-icon"
//                           loading="lazy"
//                           alt=""
//                           src={upvote2x}
//                         />
//                         <div className="input-splitter">
//                           <div className="result-merger">
//                             <div className="k1">6.2K</div>
//                           </div>
//                           <img
//                             className="down-vote-icon"
//                             alt=""
//                             src={downVote2x}
//                           />
//                         </div>
//                       </div>
//                       <div className="nested-tree">
//                         <div className="show-this-thread1">
//                           Show this thread
//                         </div>
//                       </div>
//                     </div>
//                     <div className="value-range-inner">
//                       <div className="frame-parent8">
//                         <div className="discussion-parent">
//                           <img
//                             className="discussion-icon"
//                             loading="lazy"
//                             alt=""
//                             src={discussion}
//                           />
//                           <div className="wrapper">
//                             <div className="div5">61</div>
//                           </div>
//                         </div>
//                         <div className="share-parent">
//                           <img
//                             className="share-icon"
//                             loading="lazy"
//                             alt=""
//                             src={share}
//                           />
//                           <div className="frame">
//                             <div className="div6">61</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="subtree">
//                 <div className="frame-parent9">
//                   <div className="frame-wrapper3">
//                     <div className="frame-parent10">
//                       <div className="frame-parent11">
//                         <div className="avatar-medium-wrapper">
//                           <img
//                             className="avatar-medium3"
//                             loading="lazy"
//                             alt=""
//                             src={avatarMedium12x}
//                           />
//                         </div>
//                         <div className="frame-wrapper4">
//                           <div className="srm-institue-parent">
//                             <h2 className="srm-institue1">SRM INSTITUE</h2>
//                             <div className="wrapper1">
//                               <div className="div7">·</div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="s-wrapper">
//                           <div className="s2">23s</div>
//                         </div>
//                       </div>
//                       <div className="posted-on-24-mar-2024-wrapper">
//                         <div className="posted-on-241">
//                           posted on 24 Mar 2024
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="frame-parent12">
//                     <div className="a-website-for-helping-so-and-s-wrapper">
//                       <h2 className="a-website-for1">
//                         A Website for helping so and so
//                       </h2>
//                     </div>
//                     <div className="an-excellent-platform1">
//                       An excellent platform for developing and strengthening
//                       your brand. It can increase your visibility as an
//                       individual, even as it allows you to raise your company's
//                       profile.
//                     </div>
//                     <div className="frame-parent13">
//                       <button className="vector-parent">
//                         <img
//                           className="frame-inner"
//                           alt=""
//                           src={rectangle5}
//                         />
//                         <img
//                           className="placehpolder-icon1"
//                           alt=""
//                           src={placehpolder12x}
//                         />
//                       </button>
//                       <button className="vector-group">
//                         <img
//                           className="rectangle-icon"
//                           alt=""
//                           src={rectangle5}
//                         />
//                         <img
//                           className="placehpolder-icon2"
//                           alt=""
//                           src={placehpolder12x}
//                         />
//                       </button>
//                     </div>
//                     <div className="frame-parent14">
//                       <div className="upvote-parent">
//                         <img
//                           className="upvote-icon1"
//                           loading="lazy"
//                           alt=""
//                           src={upvote2x}
//                         />
//                         <div className="shape-collection">
//                           <div className="k-wrapper">
//                             <div className="k2">6.2K</div>
//                           </div>
//                           <img
//                             className="down-vote-icon1"
//                             alt=""
//                             src={downVote2x}
//                           />
//                         </div>
//                       </div>
//                       <div className="frame-wrapper5">
//                         <div className="discussion-group">
//                           <img
//                             className="discussion-icon1"
//                             loading="lazy"
//                             alt=""
//                             src={discussion}
//                           />
//                           <div className="wrapper2">
//                             <div className="div8">61</div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="frame-wrapper6">
//                         <div className="share-group">
//                           <img
//                             className="share-icon1"
//                             loading="lazy"
//                             alt=""
//                             src={share}
//                           />
//                           <div className="wrapper3">
//                             <div className="div9">61</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="icon-repository">
//             <div className="opacity-modifier">
//               <div className="opacity-modifier-child" />
//               <img
//                 className="thumb-tack-2-plain-1"
//                 loading="lazy"
//                 alt=""
//                 src={thumbTack2Plain1}
//               />
//               <div className="alignment-aligner">
//                 <h3 className="upcoming-events">UPCOMING EVENTS</h3>
//               </div>
//             </div>
//             <div className="rectangle-group">
//               <div className="frame-child1" />
//               <div className="size-scaler">
//                 <div className="position-organizer">
//                   <h3 className="event-name">Event Name : ABCD</h3>
//                   <b className="venue-tp">Venue : TP AUDI</b>
//                   <div className="th-march-2024">25th March 2024</div>
//                 </div>
//               </div>
//               <button className="register-now-wrapper">
//                 <div className="register-now">Register now</div>
//               </button>
//             </div>
//             <div className="rectangle-container">
//               <div className="frame-child2" />
//               <div className="frame-wrapper7">
//                 <div className="event-name-abcd-parent">
//                   <h3 className="event-name1">Event Name : ABCD</h3>
//                   <b className="venue-tp1">Venue : TP AUDI</b>
//                   <div className="th-march-20241">25th March 2024</div>
//                 </div>
//               </div>
//               <button className="register-now-container">
//                 <div className="register-now1">Register now</div>
//               </button>
//             </div>
//             <div className="group-div">
//               <div className="frame-child3" />
//               <div className="frame-wrapper8">
//                 <div className="event-name-abcd-group">
//                   <h3 className="event-name2">Event Name : ABCD</h3>
//                   <b className="venue-tp2">Venue : TP AUDI</b>
//                   <div className="th-march-20242">25th March 2024</div>
//                 </div>
//               </div>
//               <button className="register-now-frame">
//                 <div className="register-now2">Register now</div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="proximity-proximer">
//         <div className="merge-merger">
//           <div className="show-this-thread2">Show this thread</div>
//         </div>
//         <div className="arrange-arranger">
//           <div className="spacer2">
//             <div className="divider5" />
//           </div>
//         </div>
//         <div className="import-importer-wrapper">
//           <div className="import-importer">
//             <div className="export-exporter">
//               <div className="link-connector">
//                 <div className="lock-locker">
//                   <div className="anchor-anchoring">
//                     <img
//                       className="avatar-medium4"
//                       alt=""
//                       src="./public/avatar--medium-4@2x.png"
//                     />
//                   </div>
//                   <div className="axis-axis-manager">
//                     <div className="grid-gridder">
//                       <h2 className="srm-institue2">SRM INSTITUE</h2>
//                       <div className="aligner-aligners">
//                         <div className="div10">·</div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="expand-extender">
//                     <div className="s3">23s</div>
//                   </div>
//                 </div>
//                 <div className="flip-flipper">
//                   <div className="posted-on-242">posted on 24 Mar 2024</div>
//                 </div>
//               </div>
//             </div>
//             <div className="combine-combiner">
//               <div className="arrange-arranger-plus">
//                 <div className="align-alignment">
//                   <h2 className="a-website-for2">
//                     A Website for helping so and so
//                   </h2>
//                   <div className="an-excellent-platform2">
//                     An excellent platform for developing and strengthening your
//                     brand. It can increase your visibility as an individual,
//                     even as it allows you to raise your company's profile.
//                   </div>
//                 </div>
//               </div>
//               <div className="follow">
//                 <div className="header">
//                   <b className="who-to-follow"> </b>
//                   <div className="divider6" />
//                 </div>
//                 <div className="profile3">
//                   <div className="rotator-plus">
//                     <div className="opacity-modifier-plus">
//                       <div className="blend-builder-plus">
//                         <div className="alignment-aligner-plus">
//                           <img
//                             className="avatar-medium5"
//                             alt=""
//                             src="./public/avatar--medium-4@2x.png"
//                           />
//                           <div className="shape-set">
//                             <div className="bessie-cooper-parent">
//                               <b className="bessie-cooper">SRM UNIVERSITY</b>
//                               <div className="alessandroveronezi">
//                                 @SRM UNIVERSITY
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="button-secondary-small-wrapper">
//                           <div className="button-secondary-small">
//                             <b className="tweet2">OTHER</b>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="divider7" />
//                   </div>
//                 </div>
//                 <div className="profile4">
//                   <div className="bessie-cooper-group">
//                     <b className="bessie-cooper1">Jenny Wilson</b>
//                     <div className="alessandroveronezi1">@gabrielcantarin</div>
//                     <img className="avatar-medium6" alt="" />
//                     <div className="button-secondary-small1">
//                       <b className="tweet3">Follow</b>
//                     </div>
//                     <div className="divider8" />
//                   </div>
//                 </div>
//                 <div className="show-thread1">
//                   <div className="show-more">Show more</div>
//                 </div>
//               </div>
//             </div>
//             <div className="frame-parent15">
//               <div className="frame-parent16">
//                 <div className="frame-parent17">
//                   <div className="upvote-group">
//                     <img
//                       className="upvote-icon2"
//                       alt=""
//                       src="./public/upvote@2x.png"
//                     />
//                     <div className="frame-parent18">
//                       <div className="k-container">
//                         <div className="k3">6.2K</div>
//                       </div>
//                       <img
//                         className="down-vote-icon2"
//                         alt=""
//                         src="./public/down-vote-2@2x.png"
//                       />
//                     </div>
//                   </div>
//                   <div className="show-this-thread3">Show this thread</div>
//                 </div>
//                 <div className="frame-wrapper9">
//                   <div className="frame-parent19">
//                     <div className="discussion-container">
//                       <img className="discussion-icon2" alt="" />
//                       <div className="wrapper4">
//                         <div className="div11">61</div>
//                       </div>
//                     </div>
//                     <div className="share-container">
//                       <img className="share-icon2" alt="" />
//                       <div className="wrapper5">
//                         <div className="div12">61</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="crafted-with-love-by-livewires-wrapper">
//                 <div className="crafted-with-love">
//                   Crafted with love by LiveWires_.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="spacer3">
//           <div className="divider9" />
//         </div>
//       </div>
//     </section>
//   </main>
// </div>

//   )
// }

// export default Home




// // ##################################################### simple page ###################################################################



import React from 'react'
const Home = () => {
  return (
<div>
  <h1>Home page</h1>
  <br></br>
<br></br>

<input
          type="text"
          // value={search}
          // onChange={(e) => setPosition(e.target.value)}
          placeholder="Search"
        />
  

<br></br>
<br></br>
HashTages
<br></br>
<button type="button" >#Tag</button>
</div>

  )
}
export default Home









