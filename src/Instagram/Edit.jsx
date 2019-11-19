import React from "react";
import "./edit.scss";
import Navi from "./Navi";
import prfimg from "./ImagesInsta/vijay.jpg";
import Footer from "./Footer";
import { Switch, Route, Link } from "react-router-dom";

class Edit extends React.Component {
  render() {
    return (
      <div className="edit">
        <div className="edt-1">
          <Navi />
        </div>
        <div className="edt-2">
          <Edp
            dp={[
              {
                link: "/edit",
                a: "Edit Profile"
              },
              {
                link: "/edit/changepassword",
                a: "Change Password"
              },
              {
                link: "/edit/appswebsite",
                a: "Apps and Website"
              },
              {
                link: "/edit/emailandsms",
                a: "Email and SMS"
              },
              {
                link: "/edit/manage contact",
                a: "Manage Conatact"
              },
              {
                link: "/edit/privacy/security",
                a: "Privacy and Security"
              },
              {
                link: "/edit/loginactivity",
                a: "Login Activity"
              },
              {
                link: "/edit/email/instagram",
                a: "Email from Instagram"
              }
            ]}
          />
          <div className="lf-co">
            <Switch>
              <Route exact path="/edit" component={Edi1} />
              <Route exact path="/edit/changepassword" component={Changpwd} />
              <Route exact path="/edit/appswebsite" component={Appsweb} />
              <Route exact path="/edit/emailandsms" component={Email} />
              <Route exact path="/edit/manage contact" component={Manage} />
              <Route exact path="/edit/loginactivity" component={Login} />
              <Route exact path="/edit/email/instagram" component={EmailIns} />
              <Route exact path="/edit/privacy/security" component={Privacy} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Edit;

const Edi = () => (
  <div className="ps">
    <div className="crd-1">
      <img src={prfimg} alt="" />
      <h2>
        nanepavi97 <br /> <span>Change Profile Photo</span>
      </h2>
    </div>
    <div className="card-2">
      <div className="aa">
        <h2>Name</h2>
        <h2>Username</h2>
        <h2>Website</h2>
        <h2>Bio</h2>
        <h2>{}</h2>
        <h2>Email</h2>
        <h2>Number</h2>
        <h2>Gender</h2>
        <h2>Similar Account Suggestions</h2>
      </div>
      <ContactForm />
    </div>
  </div>
);
const Edi1 = () => (
  <>
    <Edi />
  </>
);
const Changpwd = () => (
  <div className="ch-ps">
    <div className="chnge">
      <div className="chnge-pr">
        <img src={prfimg} alt="" />
        <h2>old password</h2>
        <h2>new password</h2>
        <h2>confirm new password</h2>
      </div>
      <div className="chn-names">
        <h2>nanepavi97</h2>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </div>
    <div className="chn-but">
      <button type="button">change password</button>
      <h2>forget password</h2>
    </div>
  </div>
);

const Appsweb = () => (
  <div className="app-web">
    <h1>Apps and Website</h1>
    <div className="app-1">
      <div className="a">
        <h2>Active</h2>
      </div>
      <div className="b">
        <h2>expired</h2>
      </div>
    </div>
    <p>
      These are apps and websites you've used Instagram to log into and have
      recently used. They can request info you chose to share with them.
    </p>
    <div className="app-2">
      <h3>happn</h3>
      <p>Authorized by you on Sep 18, 2019</p>
      <small>
        Find the people you’ve crossed paths with. <span> Privacy Policy</span>
      </small>
    </div>

    <button type="button">Remove</button>
  </div>
);

const Email = () => (
  <div className="email">
    <h1>Subcribe to:</h1>
    <ES
      es={[
        {
          n: "Feedback Emails",
          p: "Give feedback on Instagram."
        },
        {
          n: "Reminder emails",
          p: "Get notifications you may have missed."
        },
        {
          n: "Product emails",
          p: "Get tips about Instagram's tools."
        },
        {
          n: "News emails",
          p: "Learn about new Instagram features."
        },
        {
          n: "Text (SMS) Messages",
          p: "Get notifications by text message."
        }
      ]}
    />
  </div>
);
const Manage = () => (
  <div className="manage">
    <h1>manage conatct</h1>
    <p>
      The people listed here are contacts you've uploaded to Instagram. To
      remove your synced contacts, tap Delete All. If you delete your contacts
      from this page, new contacts you add to your phone will be uploaded. If
      you want to stop syncing, go to your device settings and turn off access
      to contacts.
    </p>
    <p>
      Only you can see your contacts, but Instagram uses the info you've
      uploaded about your contacts to make friend suggestions for you and others
      and to provide a better experience for everyone.
    </p>
    <div className="man-card">
      <div className="syn">
        <h1>0 Synced Contact</h1>
        <h2>detele all</h2>
      </div>
      <p>When you upload your contacts to Instagram, you'll see them here.</p>
      <button type="button">delete all</button>
    </div>
  </div>
);

const Login = () => (
  <div className="login">
    <h1>Login Activity</h1>
    <h2>Where You're Logged in</h2>
    <Lia
      la={[
        {
          p: "pavi",
          s: "Active now",
          mo: "This Linux"
        },
        {
          p: "Chennai,India",
          s: "7 hours ago",
          mo: "RMX1801"
        },
        {
          p: "Chennai,India",
          s: "September 18 ",
          mo: "Device"
        },
        {
          p: "Chennai,India",
          s: "December 15,2018",
          mo: "RMX1801"
        },
        {
          p: "Chennai,India",
          s: "November 30,2018",
          mo: "RMX1801"
        }
      ]}
    />
  </div>
);

const Lia = ({ la }) => (
  <div className="li-act">
    {la.map(li => (
      <div className="location">
        <i class="fas fa-map-marker"></i>

        <div class="lov-names">
          <p>{li.p}</p>
          <small>
            {li.s} . <span>{li.mo}</span>
          </small>
        </div>

        <i class="fas fa-chevron-down"></i>
      </div>
    ))}
  </div>
);

const Privacy = () => (
  <div className="privacy">
    <Security
      sec={[
        {
          head: "Account Privacy",
          sh: "Privacy Account",
          para:
            "When your account is private, only people you approve can see your photos and videos on Instagram. Your existing followers won't be affected."
        },
        {
          head: "Activity Status",
          sh: "Show Activity Status",
          para:
            "Allow accounts you follow and anyone you message to see when you were last active on Instagram apps. When this is turned off, you won't be able to see the activity status of other accounts."
        },
        {
          head: "Story Sharing",
          sh: "Allow Sharing",
          para: "Let people share your story as messages"
        }
      ]}
    />
    <SecPr
      prv={[
        {
          he1: "Photos of You",
          r1: "radio",
          htw: "Add Automatically",
          r2: "radio",
          htw1: "Add Manually",
          he: "Comments",
          pr: "Edit Comment Settings",
          pg:
            "Choose how you want photos of you added to your profile. Learn more about Photos of You."
        }
      ]}
    />
    <Secpr1
      psr={[
        {
          head: "Account Data",
          para: "View Account Data"
        },

        {
          head: "Two-Factor Authentication",
          para: "Edit Two-Factor Authentication Setting"
        },
        {
          head: "Data Download",
          para: "Request Download"
        },
        {
          head: "Privacy and Security Help",
          para: "Support"
        }
      ]}
    />
  </div>
);
const Security = ({ sec }) => (
  <div className="secu">
    {sec.map(ps => (
      <div className="pri">
        <div className="secu-card">
          <h1>{ps.head}</h1>
          <div className="in-pri">
            <input type="checkbox" />
            <h2>{ps.sh}</h2>
          </div>
          <p>{ps.para}</p>
        </div>
      </div>
    ))}
  </div>
);
const SecPr = ({ prv }) => (
  <div className="secu1">
    {prv.map(ps => (
      <div className="pr1">
        <div className="secu-card">
          <h1>{ps.he}</h1>
          <p>{ps.pr}</p>
        </div>
        <div className="pr-2">
          <h1>{ps.he1}</h1>
          <div className="pr-two">
            <input type={ps.r1} />
            <h2>{ps.htw}</h2>
            <input type={ps.r2} />
            <h2>{ps.htw1}</h2>
          </div>
          <p>{ps.pg}</p>
        </div>
      </div>
    ))}
  </div>
);
const Secpr1 = ({ psr }) => (
  <div className="secu2">
    {psr.map(pis => (
      <div className="pri">
        <h1>{pis.head}</h1>
        <p>{pis.para}</p>
      </div>
    ))}
  </div>
);
const EmailIns = () => (
  <div className="em-ins">
    <h1>email from instagram</h1>
    <div className="email-card">
      <div className="sec">
        <h1>security</h1>
      </div>
      <div className="oth">
        <h1>other</h1>
      </div>
    </div>
    <p>
      This is a list of emails Instagram has sent you about security and login
      in the last 14 days. You can use it to verify which emails are real and
      which are fake. Learn more.
    </p>
  </div>
);

const ES = ({ es }) => (
  <div className="email-names">
    {es.map(email => (
      <div className="checkbox-email">
        <div className="email-cd">
          <input name="remember" type="checkbox" width="50" />
          <h2>{email.n}</h2>
        </div>
        <p>{email.p}</p>
      </div>
    ))}
  </div>
);

const Edp = ({ dp }) => (
  <div className="edt-prof">
    {dp.map(dpg => (
      <Link to={dpg.link}>
        <div className="ep-cd">
          <h2>{dpg.a}</h2>
        </div>
      </Link>
    ))}
  </div>
);

class ContactForm extends React.Component {
  state = {
    name: "",
    username: "",
    wesite: "",
    designation: "",
    remember: false,
    number: "",
    email: ""
  };

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const {
      name,
      username,
      website,
      designation,
      remember,
      number,
      email
    } = this.state;

    return (
      <div className="form-input">
        <form onSubmit={this.handleSubmit}>
          <div className="input-form">
            <input
              name="name"
              type="text"
              value={name}
              onChange={this.handleChange}
              placeholder="first name"
            />
            <input
              name="username"
              type="text"
              value={username}
              onChange={this.handleChange}
              placeholder="user name"
            />
            <input
              name="website"
              type="text"
              value={website}
              onChange={this.handleChange}
            />

            <textarea
              name="designation"
              type="text"
              value={designation}
              onChange={this.handleChange}
            />
            <h3>Private Information</h3>
            <input
              name="email"
              type="text"
              value={email}
              onChange={this.handleChange}
              placeholder="enter  your email"
            />
            <input
              name="number"
              type="text"
              value={number}
              onChange={this.handleChange}
              placeholder="enter your number"
            />
            <p>male</p>
            <div className="in1">
              <input
                name="remember"
                type="checkbox"
                checked={remember}
                onChange={this.handleChange}
              />
              <h4>
                Include your account when recommending similar accounts people
                might want to follow. <span>[?]</span>
              </h4>
            </div>
            <div className="but-in">
              <button onClick={this.handleForSubmit}>Submit</button>
              <h4>Temporarily disable my account</h4>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
