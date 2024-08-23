"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[154],{3154:function(e,t,s){s.r(t),s.d(t,{default:function(){return ue}});var o=s(5671),a=s(3144),n=s(136),r=s(4876),i=s(2791),l=s(81),c=s(364),u=s(9271),d=s(2163),m=s(7781),h=s(5861),p=s(885),_=s(7757),f=s.n(_),x={profile:"style_profile__TNc0T",infoBlock:"style_infoBlock__aaEGj",mainInfo:"style_mainInfo__ix1sa",chooserColor:"style_chooserColor__DkQXR",mainPhoto:"style_mainPhoto__Pz-4-",malePhoto:"style_malePhoto__3y1L0",name:"style_name__6SUjd",status:"style_status__iowaR",statusEdit:"style_statusEdit__jQgSA",modal:"style_modal__qxjqm",overlayModal:"style_overlayModal__BfZpV",modalPhoto:"style_modalPhoto__hVAuA",description:"style_description__f2lTZ",aboutMe:"style_aboutMe__Hmwwj",skills:"style_skills__paeFN",contactsList:"style_contactsList__EBueD",contacts:"style_contacts__knbqt",gitHubIcon:"style_gitHubIcon__WuCLc",vkIcon:"style_vkIcon__DuqoL"},j=s(4942),v=s(1413),g=s(3776),b={editInfoBlock:"altEditForm_editInfoBlock__iG-gK",topBlock:"altEditForm_topBlock__lleTC",contactsBlock:"altEditForm_contactsBlock__x4sRx",leftBlock:"altEditForm_leftBlock__ofu0-",upload:"altEditForm_upload__FSZVL",name_surname:"altEditForm_name_surname__fy2ZJ",name:"altEditForm_name__tho7w",uploadBtn:"altEditForm_uploadBtn__-1bTv",photos:"altEditForm_photos__NtN2o",largePhoto:"altEditForm_largePhoto__RbNwb",smallPhoto:"altEditForm_smallPhoto__UOhhz",rightBlock:"altEditForm_rightBlock__Rliz4",checkbox:"altEditForm_checkbox__j2tUx",secondP:"altEditForm_secondP__CHglk",contacts:"altEditForm_contacts__SElr0",h3:"altEditForm_h3__DymMS",p:"altEditForm_p__4iZG+",contactsItem:"altEditForm_contactsItem__A1n3u",contactKey:"altEditForm_contactKey__i2kZh",contactValue:"altEditForm_contactValue__uL-Xl",buttons:"altEditForm_buttons__0rM9j",saveBtn:"altEditForm_saveBtn__N4O7M"},k=s(184),y=function(e){var t,s,o=e.profile,a=e.onSubmit,n=e.exitOfEditMode,r=e.isOwner,u=(0,c.I0)(),d=(0,i.useState)(o),m=(0,p.Z)(d,2),h=m[0],_=m[1],f=function(e){e.preventDefault(),a(h)};return(0,k.jsxs)("form",{className:b.editInfoBlock,onSubmit:function(e){return f(e)},children:[(0,k.jsxs)("div",{className:b.topBlock,children:[(0,k.jsxs)("div",{className:b.leftBlock,children:[(0,k.jsx)("h3",{children:"Edit your profile"}),r&&(0,k.jsxs)("div",{className:b.upload,children:[(0,k.jsx)("p",{children:"Edit photo"}),(0,k.jsx)("p",{className:b.secondP,children:"Upload new photo"}),(0,k.jsx)("input",{id:"upl",type:"file",onChange:function(e){var t=e.target.files;t&&t.length&&u((0,l.Tw)(t[0]))}}),(0,k.jsx)("label",{htmlFor:"upl",className:"button button--primary ".concat(b.uploadBtn),children:"Upload"}),(0,k.jsxs)("div",{className:b.photos,children:[(0,k.jsx)("img",{src:(null===(t=o.photos)||void 0===t?void 0:t.large)||g,className:b.largePhoto,alt:""}),(0,k.jsx)("img",{src:(null===(s=o.photos)||void 0===s?void 0:s.large)||g,className:b.smallPhoto,alt:""})]})]}),(0,k.jsx)("div",{className:b.name_surname,children:(0,k.jsxs)("div",{className:b.name,children:[(0,k.jsx)("p",{children:"Edit name"}),(0,k.jsx)("input",{type:"text",placeholder:"Name",value:h.fullName,onChange:function(e){return _((0,v.Z)((0,v.Z)({},h),{},{fullName:e.target.value}))}})]})})]}),(0,k.jsxs)("div",{className:b.rightBlock,children:[(0,k.jsx)("h3",{children:"Edit information"}),(0,k.jsxs)("div",{className:b.aboutMe,children:[(0,k.jsx)("p",{children:"Edit info"}),(0,k.jsx)("input",{type:"text",placeholder:"About me",value:h.aboutMe,onChange:function(e){return _((0,v.Z)((0,v.Z)({},h),{},{aboutMe:e.target.value}))}})]}),(0,k.jsxs)("div",{className:b.checkbox,children:[(0,k.jsx)("p",{children:"Do you want a find a job?"}),(0,k.jsx)("input",{type:"checkbox",placeholder:"",checked:h.lookingForAJob,onChange:function(){return _((0,v.Z)((0,v.Z)({},h),{},{lookingForAJob:!h.lookingForAJob}))}})]}),(0,k.jsxs)("div",{className:b.skills,children:[(0,k.jsx)("p",{children:"Edit skills"}),(0,k.jsx)("input",{type:"text",placeholder:"My professional skills",value:h.lookingForAJobDescription,onChange:function(e){return _((0,v.Z)((0,v.Z)({},h),{},{lookingForAJobDescription:e.target.value}))}})]})]})]}),(0,k.jsxs)("div",{className:b.contactsBlock,children:[(0,k.jsx)("h3",{children:"Edit contacts"}),(0,k.jsx)("div",{className:b.contacts,children:o.contacts&&Object.keys(o.contacts).map((function(e){return(0,k.jsxs)("div",{className:b.contactsItem,children:[(0,k.jsx)("div",{className:b.contactKey,children:e}),(0,k.jsx)("input",{className:b.contactValue,type:"text",placeholder:"http://".concat(e,".com"),value:h.contacts[e],onChange:function(t){return _((0,v.Z)((0,v.Z)({},h),{},{contacts:(0,v.Z)((0,v.Z)({},h.contacts),{},(0,j.Z)({},e,t.target.value))}))}})]},e)}))})]}),(0,k.jsxs)("div",{className:b.buttons,children:[(0,k.jsx)("button",{className:"button button--secondary",onClick:n,children:"Cancel"}),(0,k.jsx)("button",{className:"button button--primary ".concat(b.saveBtn),onClick:function(){return a(h)},children:"Save changes"})]})]})},N=s(1418),A=s.n(N),C="ProfileStatus_div__NLOeU",E=function(e){var t=(0,i.useState)(!1),s=(0,p.Z)(t,2),o=s[0],a=s[1],n=(0,i.useState)(e.profileStatus),r=(0,p.Z)(n,2),l=r[0],c=r[1];return(0,i.useEffect)((function(){c(e.profileStatus)}),[e.profileStatus]),(0,k.jsxs)("div",{children:[o&&(0,k.jsx)("div",{children:(0,k.jsx)("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),e.updateUserStatusTC(l)},value:l})}),!o&&(0,k.jsxs)("div",{className:C,children:["Status:  ",(0,k.jsx)("span",{onClick:function(){a(!0)},children:e.profileStatus||"------"})]})]})};var P=s.p+"static/media/github.e9c94ed8740854a692a2e82fc51ad470.svg";var w=s.p+"static/media/vk.c9df8ace962cde3253769da3b00227e5.svg";var F=s.p+"static/media/facebook.4bf9c7dced4387c15948f23b3f989cde.svg";var S=s.p+"static/media/instagram.671a4b3415f832ae85bfcd0890ed71ab.svg";var B=s.p+"static/media/twitter.e82b7ca2cd5b577fc53f1bf79262166e.svg";var I=s.p+"static/media/youtube.17d6790b6ccbd8d9651e2406255bc04e.svg",Z="style_description__un7V9",T="style_aboutMe__Tmzen",U="style_skills__gJ2-T",M="style_contactsList__3IDHp",O="style_contacts__QHNni",D="style_gitHubIcon__HnOHg",R="style_vkIcon__diMz7",X=function(e){var t=e.contactTitle,s=e.contactValue;return s?(0,k.jsxs)("div",{className:O,children:["github"===t&&""!==s&&(0,k.jsxs)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:[(0,k.jsx)("img",{src:P,className:D,alt:""}),(0,k.jsx)("p",{children:s})]}),"vk"===t&&""!==s&&(0,k.jsxs)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:[(0,k.jsx)("img",{src:w,className:R,alt:""}),(0,k.jsx)("p",{children:s})]}),"facebook"===t&&""!==s&&(0,k.jsxs)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:[(0,k.jsx)("img",{src:F,alt:""}),(0,k.jsx)("p",{children:s})]}),"instagram"===t&&""!==s&&(0,k.jsxs)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:[(0,k.jsx)("img",{src:S,alt:""}),(0,k.jsx)("p",{children:s})]}),"twitter"===t&&""!==s&&(0,k.jsxs)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:[(0,k.jsx)("img",{src:B,alt:""}),(0,k.jsx)("p",{children:s})]}),"youtube"===t&&""!==s&&(0,k.jsxs)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:[(0,k.jsx)("img",{src:I,alt:""}),(0,k.jsx)("p",{children:s})]})]}):null},L=function(e){var t=e.info;return(0,k.jsxs)("div",{className:Z,children:[(0,k.jsxs)("div",{className:T,children:[(0,k.jsx)("p",{children:"About me"}),(0,k.jsx)("span",{children:t.aboutMe})]}),t.lookingForAJob&&(0,k.jsxs)("div",{className:U,children:[(0,k.jsx)("p",{children:"Skills"}),(0,k.jsx)("span",{children:t.lookingForAJobDescription})]}),(0,k.jsx)("p",{children:"My contacts"}),(0,k.jsx)("div",{className:M,children:t.contacts&&Object.keys(t.contacts).map((function(e){return(0,k.jsx)(X,{contactTitle:e,contactValue:t.contacts[e]||""},e)}))})]})},Q=function(e){var t,s,o,a,n=e.userProfile,r=e.profileStatus,l=e.updateUserStatusTC,c=e.isOwner,u=e.goToEditMode,d=(0,i.useState)(!1),m=(0,p.Z)(d,2),h=m[0],_=m[1],f=(0,i.useState)(!1),v=(0,p.Z)(f,2),b=v[0],y=v[1],N=(0,i.useState)(!1),C=(0,p.Z)(N,2);C[0],C[1];return(0,k.jsxs)("div",{className:x.infoBlock,onDoubleClick:function(){return _(!1)},children:[n&&(0,k.jsxs)("div",{className:x.mainInfo,children:[(0,k.jsx)("label",{id:"user-color",className:x.colorBlock,onClick:function(){return _(!h)}}),(0,k.jsx)("img",{onClick:function(){return y(!0)},src:n&&null!==(t=n.photos)&&void 0!==t&&t.large?null===(s=n.photos)||void 0===s?void 0:s.large:g,className:A()(x.mainPhoto,(0,j.Z)({},x.malePhoto,n.aboutMe)),alt:"user img"}),(0,k.jsx)("div",{className:x.name,children:"".concat(n.fullName)}),(0,k.jsx)("div",{className:x.status,children:(0,k.jsx)(E,{profileStatus:r,updateUserStatusTC:l})}),c?(0,k.jsx)("button",{className:"button button--primary",onClick:u,children:"Edit my profile"}):null]}),b&&(null===(o=n.photos)||void 0===o?void 0:o.large)&&(0,k.jsxs)("div",{className:x.modal,children:[(0,k.jsx)("div",{className:x.overlayModal,onClick:function(){return y(!1)}}),(0,k.jsx)("img",{className:x.modalPhoto,src:null===(a=n.photos)||void 0===a?void 0:a.large,alt:"big user img"})]}),n&&(0,k.jsx)(L,{info:n})]})},H="style_postsBlock__hg2kE",V="style_form__3kQfo",J="style_posts__-wkDd",W="style_item__-UmDw",K="style_user__noc8G",q="style_userInfo__TfTFq",z="style_userPhoto__7CPLA",Y="style_userDescription__8yZnE",G="style_name__31x1O",$="style_removePost__HivDn",ee="style_bottomBlock__E68uL",te="style_text__XfnBV",se="style_likes__-4Px-",oe="style_likeCount__wK1ad",ae=s(1684);var ne=s.p+"static/media/removePost.fa6376d36226d03f94d3c032982897b2.svg",re=function(e){var t,s;return(0,k.jsxs)("div",{className:W,children:[e.profile&&(0,k.jsxs)("div",{className:K,children:[(0,k.jsxs)("div",{className:q,children:[(0,k.jsx)("img",{className:A()(z),src:null!==(t=e.profile.photos)&&void 0!==t&&t.large?null===(s=e.profile.photos)||void 0===s?void 0:s.large:g,alt:""}),(0,k.jsx)("div",{className:Y,children:(0,k.jsx)("div",{className:G,children:"".concat(e.profile.fullName)})})]}),e.isOwner&&(0,k.jsx)("img",{className:$,onClick:function(){return e.deletePost(e.id)},src:ne,alt:""})]}),(0,k.jsxs)("div",{className:ee,children:[(0,k.jsx)("div",{className:te,children:e.message&&e.message}),(0,k.jsxs)("div",{className:se,onClick:function(){return e.addLikes(e.id)},children:[(0,k.jsx)("span",{className:oe,children:e.likesCount}),(0,k.jsx)("img",{src:ae,alt:""})]})]})]},e.id)},ie=function(e){var t=e.isOwner,s=(0,c.v9)((function(e){return e.profilePage})),o=(0,c.v9)((function(e){return e.profilePage.posts})),a=(0,c.I0)(),n=(0,i.useState)(""),r=(0,p.Z)(n,2),u=r[0],d=r[1],m=o.map((function(e){return(0,k.jsx)(re,{message:e.message,likesCount:e.likeCount,id:e.id,profile:s,isOwner:t,addLikes:function(e){return a((s.userId,console.log("")))},deletePost:function(e){return a((0,l.Uc)(e))}},e.id)}));return(0,k.jsxs)("div",{className:H,children:[(0,k.jsx)("h3",{children:"My posts"}),t&&(0,k.jsxs)("form",{className:"form--primary ".concat(V),onSubmit:function(e){return function(e){e.preventDefault(),a((0,l.Pi)(u)),d("")}(e)},children:[(0,k.jsx)("input",{className:"form--primary-input",type:"text",placeholder:"Enter your post...",value:u,onChange:function(e){return d(e.target.value)}}),(0,k.jsx)("button",{className:"button button--primary form--primary-button",children:"Add post"})]}),(0,k.jsx)("div",{className:J,children:m})]})},le=function(e){var t=e.userProfile,s=e.profileStatus,o=e.isOwner,a=(0,c.I0)(),n=(0,i.useState)(!1),r=(0,p.Z)(n,2),u=r[0],d=r[1],m=function(){var e=(0,h.Z)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a((0,l.Ms)(t));case 2:d(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,k.jsx)("div",{children:u?(0,k.jsx)(y,{profile:t,onSubmit:m,exitOfEditMode:function(){return d(!1)},isOwner:o}):(0,k.jsx)("div",{className:x.profile,children:t&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Q,{profileStatus:s,isOwner:o,userProfile:t,updateUserStatusTC:function(e){return a((0,l.wM)(e))},goToEditMode:function(){return d(!0)}}),(0,k.jsx)(ie,{isOwner:o})]})})})},ce=function(e){(0,n.Z)(s,e);var t=(0,r.Z)(s);function s(){var e;(0,o.Z)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).refreshProfile=function(){var t=e.props.match.params.userId;e.props.authorizedUserId;if(!t)return t===e.props.authorizedUserId;e.props.getProfileTC(t),e.props.getUserStatusTC(t)},e}return(0,a.Z)(s,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){if(this.props.match.params.userId!==e.match.params.userId)return this.refreshProfile}},{key:"render",value:function(){return(0,k.jsx)(le,{saveProfileTC:this.props.saveProfileTC,savePhoto:this.props.savePhotoTC,isOwner:!this.props.match.params.userId,userProfile:this.props.userProfile,profileStatus:this.props.profileStatus,updateUserStatusTC:this.props.updateUserStatusTC})}}]),s}(i.Component),ue=(0,m.qC)((0,c.$j)((function(e){return{userProfile:e.profilePage.userProfile,profileStatus:e.profilePage.profileStatus,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getProfileTC:l.GA,getUserStatusTC:l.Qw,updateUserStatusTC:l.wM,savePhotoTC:l.Tw,saveProfileTC:l.Ms}),u.EN,d.D)(ce)},2163:function(e,t,s){s.d(t,{D:function(){return u}});var o=s(1413),a=s(5987),n=(s(2791),s(9271)),r=s(364),i=s(184),l=["isAuth"],c=function(e){return{isAuth:e.auth.isAuth}};function u(e){return(0,r.$j)(c)((function(t){var s=t.isAuth,r=(0,a.Z)(t,l);return s?(0,i.jsx)(e,(0,o.Z)({},r)):(0,i.jsx)(n.l_,{to:"/login"})}))}},1684:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABHNCSVQICAgIfAhkiAAAA5pJREFUaEPtWktS20AQ7bYNlORFyAlCThBygpgTAAswO+xtSg7kBFFuYIKSLbBDZgGcAHMCzAminCDOwnIZsDo1suTIRv+RkKzKVFF2yTPd/bpbb3p6QCjowILigv/APu48rJfxaZ8Q1hFgDSZ/5iCALhL0EKn7Ta1ex8mCT/XBJhHWLPk1hwyNADQmf0yVsx8Xy70w8gMjJtX1AySSAXE1jEAA0AxC+XtHOAsz35QPcOh0lO86oj4hyooqHvnN8wQm7Q1rSHQSWuGcFiLqGbTU9PIwy4ASPp4g4noYB7jM0QixqZwLXbf1rsBaO8MGlExQfIN5t1TanlduOs0wLiNkgbcdBjaPL4TT+QnPgEm7AxkRv/AhmlvtUJ6Y02ZVfD5Wxbbz0QwwaXewhYiXiYIy2YX6Y1raYF/L+HiTSKSep/620qle2Y+nwA73hmtjw7hLQ+mEOqlvfoYnoWj+JeqXS6X37XNBM9XYq6W6foMATpqNJjgHs9m2o6iimRkmMIsBb3JgG7cJhLjByGoCrADRsj1iRw0Pt2h1vDL8ze2qHAkoj4TXmBoTZgiUiLYZsFNE3M/QjsRVE9EZtnb1LiB8SFx6lgIJblnE7jjqtSzN99TN6lRs1XXKpXWcRhUXmFTXNQR4w+mgXC0ngF/FJY9WXWcV8WauXM5vzDWmdD7iN41HgoFNNI8rRD955ORtbRnxrVUED3oI+C5vBsaxh4DuFbXKOmkAhUpHqw3hPGguPO0zmldU0ex3ToEVIWqsqrf7HjPNnIUuiAlujzvitLUxA4wdOp+WdQ0RX8V5cbNaQ0R/Kg/iWvsKJw0jZyraDxax/2H3OZyOde0ES3W9jQAHWUUgil4COFJUkfX+Z4Z3734BTtbspKx0qg03R/jetuS5beAHyvUdc6I3yWRF7+auKpljwMgRmxJKjtIyKFKerOj14uYhLcOCCkzFeZBZgosCKjIwtiCV+7MAfieir0qnKkfZBgLvoN2EvWhd6XFjGQQyFjArclsAwLrIqZRfrEwCgIbzMi8ITGDlEVaAdUHeTRocA2XQUi3svz7Epns/oEnvdewEXBmJNWdBG9bRiUXMFmRdRbGbe95u13V5JDR4QcViRT/v8WwHUek8KIqxycNLcCzGjMl8fuASBxaFMXmZ78WBMYVBjJkE82UCjCn1YsykmC8zYP/ADWUgmhwIEU8rI0FOgvkyBRbEXmn9ngp5pGVsFLmFBfYXww2rWDXAoPkAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=154.41610633.chunk.js.map