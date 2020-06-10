import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
} from "ionic-angular";
import { SocialSharing } from "@ionic-native/social-sharing";
import {
  Pinterest,
  PinterestUser,
  PinterestPin,
  PinterestBoard,
} from "@ionic-native/pinterest";
import { BranchIo } from "@ionic-native/branch-io";
import { InAppBrowser } from "@ionic-native/in-app-browser";
declare var window;
/**
 * Generated class for the PopoverpagesharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-popoverpageshare",
  templateUrl: "popoverpageshare.html",
})
export class PopoverpagesharePage {
  image;
  artistname;
  user_url;
  scopes;
  createboard;
  desc;
  note;
  usermedia;
  branchUniversalObj;
  type;
  banner;
  constructor(
    public branch: BranchIo,
    public alertCtrl: AlertController,
    public pinterest: Pinterest,
    public socialshare: SocialSharing,
    public navCtrl: NavController,
    public navParams: NavParams,
    public iab: InAppBrowser
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PopoverpagesharePage");
    this.image = this.navParams.get("image");
    this.artistname = this.navParams.get("artistname");
    // this.user_url=this.navParams.get('user_url')
    this.usermedia = this.navParams.get("usermediaid");
    this.type = this.navParams.get("type");
    console.log("type" + this.type);
    console.log("usermedia", this.usermedia);
    //  this.user_url='artformplatform.app.link/users/art/'+this.usermedia

    //  alert(this.image + "--" + this.artistname + "---" + this.user_url);
    // alert("hi" + this.usermedia);
    // alert("type" + this.type);
    if (this.type) {
      this.banner = this.navParams.get("banner");
      //  alert("banner" + this.banner);
      this.branch
        .createBranchUniversalObject({
          canonicalIdentifier: this.usermedia,
          title: this.artistname,
          contentDescription: "Check out this artwork At ArtFormPlatform !",
          contentImageUrl: this.image,
          contentMetadata: {
            userId: this.usermedia,
            userName: this.artistname,
            type: this.type,
            banner: this.banner,
          },
        })
        .then((newBranchUniversalObj) => {
          this.branchUniversalObj = newBranchUniversalObj;
          // alert("pikabu" + JSON.stringify(newBranchUniversalObj));
          this.branchfunc();
        });
    } else {
      // alert("artistname" + this.artistname);
      this.branch
        .createBranchUniversalObject({
          canonicalIdentifier: this.usermedia,
          title: this.artistname,
          contentDescription:
            "Check out this Artist Profile At ArtFormPlatform !",
          contentImageUrl: this.image,
          contentMetadata: {
            userId: this.usermedia,
            userName: this.artistname,
            type: 0,
          },
        })
        .then((newBranchUniversalObj) => {
          this.branchUniversalObj = newBranchUniversalObj;
          //   alert("pikabu" + JSON.stringify(newBranchUniversalObj));
          this.branchfunc();
        });
    }
  }

  branchfunc() {
    // alert('branch')
    this.branchUniversalObj
      .generateShortUrl(
        {
          // put your link properties here
        },
        {
          // put your control parameters here
        }
      )
      .then((data) => {
        this.user_url = data.url;
        // alert("user_url" + this.user_url);
        // alert('data'+JSON.stringify(data))
        // alert('aao kabi haveli pr'+data.url)
        // alert('kyu aau?'+data[0].url)
        // alert(data.url)
        //  alert(this.user_url)
      });
  }
  shareviafb() {
    // this.branchUniversalObj.showShareSheet({
    //   // put your link properties here
    //   "feature" : "share",
    //   "channel" : "facebook"
    // }, {
    //   // put your control parameters here
    //   "$desktop_url" : "https://www.facebook.com",
    // });
    const browser = this.iab.create(
      "https://www.facebook.com/sharer/sharer.php?u=" + this.user_url,
      "_system",
      "location=no"
    );

    // this.socialshare
    //   .shareViaFacebookWithPasteMessageHint(
    //     this.artistname + "-artform platform check out this work on",
    //     null,
    //     this.user_url
    //   )
    //   .then((data) => {
    //     alert("data" + data);
    //     // Success
    //     //  this.socialshare.shareViaFacebookWithPasteMessageHint(this.artistname+'-artform platform check out this work on',null,'artformplatform.com/users/art/'+this.usermedia).then((data) => {
    //     //     this.socialshare.shareViaFacebookWithPasteMessageHint(this.artistname+'-artform platform check out this work on',null,'artformplatform.app.link/users/art/'+this.usermedia).then((data) => {
    //   })
    //   .catch((e) => {
    //     alert("ee" + e);
    //   });
  }
  shareviatwitter() {
    //  this.socialshare.shareViaTwitter(this.artistname+'-artform platform check out this work on',null,this.user_url).then((data)=>{
    // alert('data'+data)
    //   this.socialshare.shareViaTwitter(this.artistname+'-artform platform check out this work on',null,'artformplatform.com/users/art/'+this.usermedia).then((data)=>{

    this.socialshare
      .shareViaTwitter(
        this.artistname + "-artform platform check out this work on",
        null,
        this.user_url
      )
      .then((data) => {
        // alert("data" + JSON.stringify(data));
      })
      .catch((e) => {
        //  alert("e" + JSON.stringify(e));
        // alert("Application is not installed .Please install the application.");
      });
  }
  shareviaothers() {
    this.scopes = [
      this.pinterest.SCOPES.READ_PUBLIC,
      this.pinterest.SCOPES.WRITE_PUBLIC,
      this.pinterest.SCOPES.READ_RELATIONSHIPS,
      this.pinterest.SCOPES.WRITE_RELATIONSHIPS,
    ];
    this.pinterest
      .login(this.scopes)
      .then((res) => {
        let alert = this.alertCtrl.create({
          title: "Create Board",
          inputs: [
            {
              name: "CreateBoard",
              placeholder: "Enter Board name",
            },
          ],
          buttons: [
            {
              text: "Send",
              handler: (data) => {
                this.createboardcall(data.CreateBoard);
              },
            },
          ],
        });
        alert.present();
      })
      .catch((err) => alert("Error loggin in" + err));
    // this.socialshare.share(this.artistname+'-artform platform check out this work on'+this.user_url,null,null).then((data)=>{
    //   console.log(data)
    // }).catch((e)=>{
    //   // alert('error'+e)
    // })
  }
  createboardcall(CreateBoard) {
    this.desc = "ArtForm";
    this.note = this.artistname + "-artform platform check out this work on";
    this.pinterest
      .createBoard(CreateBoard, this.desc)
      .then((data) => {
        // alert(JSON.stringify((data)))
        // this.pinterest.createPin(this.note, data.id, this.image, this.user_url).then((data)=>{
        // alert(JSON.stringify(data))
        //   this.pinterest.createPin(this.note, data.id, this.image,'artformplatform.com/users/art/'+this.usermedia).then((data)=>{
        this.pinterest
          .createPin(this.note, data.id, this.image, this.user_url)
          .then((data) => {
            let alert = this.alertCtrl.create({
              title: "Pin Shared Successfully !",
              buttons: [
                {
                  text: "Close",
                  handler: (data) => {},
                },
              ],
            });
            alert.present();
          })
          .catch((err) => {
            alert(JSON.stringify(err));
          });
      })
      .catch((err) => alert(JSON.stringify(err)));
  }
  shareviawattsapp() {
    //  alert('user'+this.user_url)
    //  alert( localStorage.getItem('usermedia'))

    // alert(localStorage.removeItem('usermedia'))
    // this.socialshare.shareViaWhatsApp('artformplatform.com/users/art/'+this.usermedia,null,null).then((data)=>{
    // this.socialshare.shareViaWhatsApp(this.artistname+'-artform platform check out this work on' +this.user_url,null,null).then((data)=>{
    // alert('data'+data)
    //  this.socialshare.shareViaWhatsApp(this.artistname+'-artform platform check out this work on artformplatform.com/users/art/'+this.usermedia,null,null).then((data)=>{
    this.socialshare
      .shareViaWhatsApp(this.user_url, null, null)
      .then((data) => {})
      .catch((e) => {
        // alert('error'+e)
      });
  }
  shareviamail() {
    // this.socialshare.shareViaEmail(this.artistname+'-artform platform check out this work on artformplatform.com/users/art/'+this.usermedia, 'Check Out This!', null, null, null, null).then((data)=>{
    // this.socialshare.shareViaEmail('artformplatform.com/users/art/'+this.usermedia, 'Check Out This!', null, null, null, null).then((data)=>{
    this.socialshare
      .shareViaEmail(this.user_url, "Check Out This!", null)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        // alert('error'+e)
      });
  }
}
