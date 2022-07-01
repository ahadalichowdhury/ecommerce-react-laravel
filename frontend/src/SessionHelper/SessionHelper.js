class SessionHelper{
    static setAboutSession(JSONData){
        sessionStorage.setItem('siteInfoAbout', JSONData);
    }
    static getAboutSession(){
       return sessionStorage.getItem('siteInfoAbout');

    }
    static setPrivacySession(JSONData){
        sessionStorage.setItem('siteInfo_policy', JSONData);
    }
    static getPrivacySession(){
       return sessionStorage.getItem('siteInfo_policy');

    }
    static setPurcheseSession(JSONData){
        sessionStorage.setItem('siteInfo_purchase_guide', JSONData);
    }
    static getPurcheseSession(){
       return sessionStorage.getItem('siteInfo_purchase_guide');
       

    }
    static setRefundSession(JSONData){
        sessionStorage.setItem('siteInfo_terms', JSONData);
    }
    static getRefundSession(){
        return sessionStorage.getItem('siteInfo_terms');
       

    }
    static setUserMobile(UserMobile){
        sessionStorage.setItem('UserMobile', UserMobile);
    }
    static getUserMobile(){
        return sessionStorage.getItem('UserMobile');
       

    }
    static removeUserMobile(){
        return sessionStorage.removeItem('UserMobile');
    }

}
export default SessionHelper;