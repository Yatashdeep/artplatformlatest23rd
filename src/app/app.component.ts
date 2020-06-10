import { Component, ViewChild } from "@angular/core";
import {
  Platform,
  Nav,
  MenuController,
  Events,
  LoadingController,
  AlertController,
} from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

//import { HomePage } from '../pages/home/home';
//import { SecuritypanelPage } from '../pages/securitypanel/securitypanel';
//import { TabspagePage } from '../pages/tabspage/tabspage';
//import{CreateconversationpagePage}from'../pages/createconversationpage/createconversationpage'
//import { EditprofilepagePage } from '../pages/editprofilepage/editprofilepage';
//import { CategoryPage } from '../pages/category/category';
//import { ArtprofilePage } from '../pages/artprofile/artprofile';
//import { UploadmediaPage } from '../pages/uploadmedia/uploadmedia';
//import { ReportprobPage } from '../pages/reportprob/reportprob';
//import { GetintouchPage } from '../pages/getintouch/getintouch';
//import { AboutuspPage } from '../pages/aboutusp/aboutusp';
//import { HowitworkspPage } from '../pages/howitworksp/howitworksp';
//import { TermsandconditionsPage } from '../pages/termsandconditions/termsandconditions';
//import { PrivacypPage } from '../pages/privacyp/privacyp';
//import{CommunitygudelinesPage}from'../pages/communitygudelines/communitygudelines'
//import { CompetitionspPage } from '../pages/competitionsp/competitionsp';
//import{CategorytabpagePage}from'../pages/categorytabpage/categorytabpage'
//import { SubcattabpPage } from '../pages/subcattabp/subcattabp';
//import { ChildcattabpagePage } from '../pages/childcattabpage/childcattabpage';
//import { ChoosecatpagetabPage } from '../pages/choosecatpagetab/choosecatpagetab';
import { CommentsboxPage } from "../pages/commentsbox/commentsbox";
//import { EditproartistpagPage } from '../pages/editproartistpag/editproartistpag';
//import { ViewtalentPage } from '../pages/viewtalent/viewtalent';
//import { HowtouploadpagesidemenuPage } from '../pages/howtouploadpagesidemenu/howtouploadpagesidemenu';
//import { FollowedartistPage } from '../pages/followedartist/followedartist';
//import { ViewvideoplayPage } from '../pages/viewvideoplay/viewvideoplay';
import { SecurityProvider } from "../providers/security/security";
import { from } from "rxjs/observable/from";
import { Observable } from "rxjs/Rx";
//import { DashboardPage } from '../pages/dashboard/dashboard';
//import{InboxpagePage}from'../pages/inboxpage/inboxpage'
//import { SelectuploadcategoryPage } from '../pages/selectuploadcategory/selectuploadcategory';
//import { Deeplinks } from "@ionic-native/deeplinks";
import { BranchIo } from "@ionic-native/branch-io";
import { ArtistprofilepagePage } from "../pages/artistprofilepage/artistprofilepage";
import { OneSignal } from "@ionic-native/onesignal";
import { UniqueDeviceID } from "@ionic-native/unique-device-id";
import { Device } from "@ionic-native/device";

declare var Branch;
// import Auth0Cordova from '@auth0/cordova';

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  rootPage: any = "HomePage";
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Nav) navChild: Nav;
  pages: Array<{ title: string; component: any; logo: string }>;

  imageprofilepic = "assets/imgs/logo_sign_in.png";
  username;
  icon1;
  icon2;
  icon3;
  icon4;
  icon5;
  icon6;
  icon7;
  icon8;
  icon9;
  profile_pic;
  firtsname;
  usermedia;
  branchtest;
  branch1;
  constructor(
    private device: Device,
    private uniqueDeviceID: UniqueDeviceID,
    private oneSignal: OneSignal,
    public alertCtrl: AlertController,
    //public deeplinks: Deeplinks,
    public security: SecurityProvider,
    public loadingCtrl: LoadingController,
    public event: Events,
    public menuCtrl: MenuController,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public branch: BranchIo
  ) {
    // alert("new");
    this.profile_pic = localStorage["profile_pic"];
    this.firtsname = localStorage["firstname"];
    this.icon1 = "assets/Menu/menu/about.png";
    this.icon2 = "assets/Menu/menu/upload.png";
    this.icon3 = "assets/Menu/menu/setting.png";
    this.icon4 = "assets/Menu/menu/mail.png";
    this.icon5 = "assets/Menu/menu/facebook.png";
    this.icon6 = "assets/Menu/menu/file.png";
    this.icon7 = "assets/Menu/menu/privacy.png";
    this.icon8 = "assets/Menu/menu/guidance.png";
    this.icon9 = "assets/Menu/menu/signIn.png";

    event.subscribe("user:created", (user, time) => {
      console.log("pikabu" + user);
      localStorage["status"] = user;
    });
    event.subscribe("user:image", (profile_pic, firtsname, time) => {
      this.profile_pic = profile_pic;
      this.firtsname = firtsname;
      localStorage["firstname"] = firtsname;
      localStorage["profile_pic"] = profile_pic;
    });
    // alert(localStorage['status'])
    if (localStorage["status"] == "true") {
      // this.navCtrl.setRoot(TabspagePage,{id:4})
      this.rootPage = "TabspagePage";
      //  alert('hi')
    } else {
      //  alert('bi')
      this.rootPage = "HomePage";
    }
    platform.ready().then(() => {
      // alert("newbranch");
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.deeplinks.routeWithNavController(this.navChild,{
      //   '/users/art/:usermedia':CommentsboxPage
      // }).subscribe((match)=>{
      //   alert('testlink')
      //   localStorage.setItem('usermedia',match.$args.usermedia)
      //  alert('setItem'+localStorage.getItem('usermedia'))
      //   // localStorage['usermedia']=match.$args.usermedia
      //   // this.usermedia=match.$args.usermedia
      //  //event.publish('usermediaid:created', this.usermedia);
      // },(nomatch)=>{
      //   alert('unmatched'+nomatch)
      // })
      statusBar.styleDefault();
      splashScreen.hide();
      statusBar.overlaysWebView(true);
      statusBar.styleLightContent();
      if (platform.is("cordova")) {
        this.device.uuid;
        //alert(this.device.uuid)
        this.setupPush(this.device.uuid);
        localStorage.setItem("uuid", this.device.uuid);
        // this.uniqueDeviceID.get()
        // .then((uuid: any) =>
        //    {
        //      localStorage.setItem('uuid',uuid)
        //      this.setupPush(uuid);
        //    }
        //  )
        // .catch((error: any) => console.log(error));
      }
      this.hopetest();
      // (window as any).handleOpenURL = (url: string) => {
      //   Auth0Cordova.onRedirectUri(url);
      // }
    });
    platform.resume.subscribe(() => {
      this.hopetest();
    });

    // only on devices

    this.pages = [
      { title: "About US", component: "AboutuspPage", logo: this.icon1 },
      {
        title: "How to Upload",
        component: "HowtouploadpagesidemenuPage",
        logo: this.icon2,
      },
      {
        title: "How it Works?",
        component: "HowitworkspPage",
        logo: this.icon3,
      },
      { title: "Get in Touch", component: "GetintouchPage", logo: this.icon4 },
      // {title: 'Connect',component:TabspagePage,logo:this.icon5},
      {
        title: "Terms and Conditions",
        component: "TermsandconditionsPage",
        logo: this.icon6,
      },
      { title: "Privacy Policy", component: "PrivacypPage", logo: this.icon7 },
      {
        title: "Community Guidelines",
        component: "CommunitygudelinesPage",
        logo: this.icon8,
      },
      { title: "Sign Out", component: "HomePage", logo: this.icon9 },
    ];
  }

  openPage(page) {
    console.log(page.title);
    if (page.title == "Sign Out") {
      localStorage.removeItem("image1");
      localStorage.removeItem("banner");
      this.nav.setRoot(page.component);
      this.menuCtrl.close();
      // let loading=this.loadingCtrl.create({
      //   spinner:'hide',
      //   content:'<img src="https://media.giphy.com/media/3dbzJ7r5tLLjRPufWl/giphy.gif">',
      //   cssClass:'transparent'
      // })
      // loading.present()
      Observable.of(null)
        .flatMap(() => this.security.loggedout())
        .subscribe((data) => {
          localStorage["status"] = false;
        });
    } else {
      this.nav.setRoot(page.component);
      this.menuCtrl.close();
    }
  }
  closemenu() {
    this.menuCtrl.close();
  }
  ionViewDidLoad() {
    var x = (document.getElementById(3 + "_img").style.marginLeft = "-7px");
  }
  hopetest() {
    this.branch.initSession().then((data) => {
      // alert("hi" + JSON.stringify(data));
      // alert('click_branch_link'+data['+clicked_branch_link'])
      //  alert('non_branch_link'+data['+non_branch_link'])
      if (data["+non_branch_link"]) {
        //alert('hi')
        // this.branchtest=data['+non_branch_link'].split("https://artformplatform.app.link/users/art/")
        // alert(this.branchtest)
        //  alert('branchtest'+this.branchtest[1])
        // this.branchtest = this.branchtest[1].split("?")[0]
        //  alert('hello'+this.branchtest)
        // localStorage.setItem('usermedia',this.branchtest)
        // this.nav.push(CommentsboxPage)
        // this.rootPage=CommentsboxPage
      }
      if (data["+clicked_branch_link"]) {
        //  alert('data'+data['type'])
        localStorage.setItem("type", data["type"]);
        // alert(data['+contentMetadata'].type)
        // read deep link data on click
        // alert('hope'+data['$canonical_identifier'])
        //  alert( localStorage.getItem('getbranchstatus'))
        if (localStorage.getItem("getbranchstatus")) {
          localStorage.setItem("usermedia", data["$canonical_identifier"]);
          if (data["type"] != 0) {
            //  alert(data['$og_image_url'])
            // alert(data['userName'])
            // alert(data['banner'])
            //  localStorage.setItem('profile',data['$og_image_url'])
            //  localStorage.setItem('title',data['userName'])
            //  localStorage.setItem('banner',data['banner'])
            this.nav.push(ArtistprofilepagePage);
          } else {
            this.nav.push(CommentsboxPage);
          }
        } else {
          ///  alert('hiii')
          localStorage.setItem("usermedia", data["$canonical_identifier"]);
          this.rootPage = "SecuritypanelPage";
        }
        // alert('Deep Link Data: ' + JSON.stringify(data));
      }
    });
  }
  navigatetotab() {
    this.nav.setRoot("TabspagePage");
    this.menuCtrl.close();
  }
  setupPush(uuid) {
    // alert(uuid)
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit("2f5be9ae-aa4b-47c6-88e4-27820123c955", uuid);

    this.oneSignal.inFocusDisplaying(
      this.oneSignal.OSInFocusDisplayOption.None
    );

    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe((data) => {
      //  alert('data'+JSON.stringify(data))
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });

    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe((data) => {
      //        alert('data'+JSON.stringify(data))
      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;

      this.showAlert(
        "Notification opened",
        "You already read this before",
        additionalData.task
      );
    });

    this.oneSignal.endInit();
    this.oneSignal.getIds().then((id) => {
      //  alert('id'+id.userId)
      localStorage.setItem("uuid", id.userId);
    });
  }

  showAlert(title, msg, task) {
    const alert = this.alertCtrl.create({
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          },
        },
      ],
    });
    alert.present();
  }
}
