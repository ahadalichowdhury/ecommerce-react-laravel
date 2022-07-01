class ApiURL{
    static BaseURL = "http://127.0.0.1:8000/api/";
    static VisitorDetails =this.BaseURL+'getVisitorDetails';
    static PostContactDetails =this.BaseURL+'postContactDetails';
    static sendSiteInfo =this.BaseURL+'sendSiteInfo';
    static sendCategoryDetails =this.BaseURL+'sendCategoryDetails';
  
    static ProductListByRemark(remark){
        return this.BaseURL+'ProductListByRemark/'+ remark;

    }
    static ProductListByCategory(Category){
        return this.BaseURL+'ProductListByCategory/'+ Category;

    }
    static ProductListBySubCategory(Category,SubCategory ){
        return this.BaseURL+'ProductListBySubCategory/'+ Category + '/'+ SubCategory;

    }

    static sendSliderInfo =this.BaseURL+'sendSliderInfo';


    static ProductDetails(ProductCode ){
        return this.BaseURL+'productDetails/'+ ProductCode;
    }

    static notificationHistory =this.BaseURL+'notificationHistory';

    static ProductListBySearch(SearchKey){
        return this.BaseURL+'ProductBySearch/'+ SearchKey;
    }

    static CreateOtp(mobile){
        return this.BaseURL+'CreateOTP/'+ mobile;
    }
    static OtpVerification =this.BaseURL+'OtpVerification';
    

}

export default ApiURL;