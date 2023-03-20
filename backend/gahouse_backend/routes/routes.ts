import express from 'express'
const router = express.Router()
console.log('this is  the route')
import school from '../schema/schoolSchema';
import userRegistration from '../controllers/userControllers/userRegistration';
import Login from '../controllers/userControllers/loginUser';
import adminLogin from '../controllers/adminControllers/loginAdmin';
import confirmRegister from '../controllers/userControllers/confirmRegistration';
import registerAdmin from '../controllers/adminControllers/registerAdmin';
import queryData from '../controllers/queryParameterData/queryParameter';
import auth from '../auth/auth';
import propertyData from '../controllers/propertyDataController/propertyData';
import propertyPaginations from '../controllers/paginationas';
import forgetPasswordSendEmail from '../controllers/forgetPassword/forgetPasswordSendEmail';
import forgetPassword from '../controllers/forgetPassword/forgetPassword';
import schoolList from '../controllers/school/schoolList';
import propertyLocal from '../controllers/dataOfProperty/dbProperty';
import primaryFilters from '../controllers/PrimaryFilters/filters';
import gatedCommunity from '../controllers/PrimaryFilters/gatedCommunity/gatedCommunity';
//all property data replication api//
import allPropertydataApi from '../controllers/totaldataOfProperty/totaldata';
import schools from '../controllers/PrimaryFilters/schoolRating/schoolRating';
//fetch the school  data from the school.csv file  and save to mongodb//
import luxuryHomes from '../controllers/PrimaryFilters/luxury_homes/luxury_home';
import pools from '../controllers/PrimaryFilters/pool/pool';
import Newbuilds from '../controllers/PrimaryFilters/NewBuilds/NewBuilds';
import waterfront from '../controllers/PrimaryFilters/WaterBodyName/waterbody';
import masterOrmain from '../controllers/PrimaryFilters/masterormain/masterormain';
import highRise from '../controllers/PrimaryFilters/HighRise/Highrise';
import bedRoomOrMain from '../controllers/PrimaryFilters/bedroomOnMain/bedroomOnMain';
import RanchHouse from '../controllers/PrimaryFilters/RenchHouse/RenchHouse';
import olderProperty from '../controllers/PrimaryFilters/olderProperties/olderProperties';
import recenltySoldProperty from '../controllers/PrimaryFilters/recentlysoldProperties/recentlysoldProperties';
import PropertieswithVirtualTour from '../controllers/PrimaryFilters/propertiesWithVirtualTour/propertiesWithVirtual';
import sevendaysorlessProperty from '../controllers/PrimaryFilters/sevendaysorlessProperty/sevendaysorlessProperty';
import reports from '../controllers/reports/reports';
import FMLS_AssociationRentRestrictionsYN from '../controllers/PrimaryFilters/FMLS_AssociationRentRestrictionsYN/FMLS_AssociationRentRestrictionsYN';
//count//
import countyParishcount from '../controllers/countoffilters/countyOrParisCount';
import gatedCommunityCount from '../controllers/countoffilters/gatedCommunities';
import luxuryHomesCount from '../controllers/countoffilters/luxuryHomesCount';
import waterfrontCount from '../controllers/countoffilters/waterFrontCount';
import FMLS_AssociationRentRestrictionsYNCount from '../controllers/countoffilters/FMLS_AssociationRentRestrictionsYNCount';
import NewbuildsCounts from '../controllers/countoffilters/newBuildsCount';
import HighRiseCount from '../controllers/countoffilters/HighRiseCount';
import RanchHouseCounts from '../controllers/countoffilters/RanchHouseCount';
import schoolCount from '../controllers/countoffilters/schoolRatings';
import masterOrmainCount from '../controllers/countoffilters/masterOrMainCount';
import olderPropertyCount from '../controllers/countoffilters/olderPropertiesCount';
import sevendaysorlessPropertyCount from '../controllers/countoffilters/newPropertiesCount';
import poolsCount from '../controllers/countoffilters/poolCount';
import PropertieswithVirtualTourCount from '../controllers/countoffilters/propertiesWithVirtualsTour';
import searchpropertyWithSchool from '../controllers/school/searchPropertywithSchool';
import searchschoolWithProperty from '../controllers/searchSchoolWithProperty/searchPropertywithSchool';
import updateprofile from '../controllers/userControllers/updateProfile';
// import getSingleProperty from '../controllers/getSingleProperty';
import createInquiry from '../controllers/inquiry/createInquiry';
import getSingleProperty from '../controllers/getSingleProperty';
import totalProperty from '../controllers/totalProperty/totalProperty';
import gatedCommunitysinglepage from '../controllers/singleapi/gatedCommunities';
import createReview from '../controllers/review/createReview';
const csvjson = require('csvtojson');
// import getSingleProperty from '../controllers/singleProperty/getSingleProperty';
import newpropertyData from '../controllers/propertyDataController/propertyData';
import totalCountyOrparis from '../controllers/totalCounty/totalcounty';
import singleapi from '../controllers/PrimaryFilters/singlefilterApi';
import totalCities from '../controllers/totalCities/totalCities';
import totalPropertySubType from '../controllers/totalPropertySubType/totalPropertySubType';
import schoolRatingForProperTy from '../controllers/school/schoolRatingByProperty';
import createContactUs from '../controllers/contactUs/contactUs';
import GoogleLogin from '../controllers/userControllers/loginGoogle';
import AuthMe from '../controllers/userControllers/authMe';
import UpdateLabel from '../controllers/PrimaryFilters/updateLabel';
import featuredProperty from '../controllers/featured/featuredProperty';
import compareFilters from '../controllers/PrimaryFilters/compare';
import contactInformation from '../schema/contactInformation';
import createcontactInformation from '../controllers/contactInformation/contactInformation';
import wishlistFilters from '../controllers/PrimaryFilters/wishlist';
import property from '../schema/propertySchema';
import Logout from '../controllers/userControllers/logoutUser';
const schoolData = async (req: any, res: any) => {
    try {
        const csvpath = 'school.csv'
        csvjson().fromFile(csvpath).then(async (data: any) => {
            let data1 = []
            for (let i = 1; i < 263; i++) {
                const savedata = await school.create({

                    County: data[i].County,
                    CITIES: data[i].CITIES,
                    TYPE: data[i].TYPE,
                    SCHOOL_NAME: data[i]["SCHOOL NAME"],
                    FMLS_VALUE: data[i]['SCHOOL (FMLS VALUE)'],
                    ZIP: data[i].ZIP,
                    RATING: data[i].RATING

                })

                data1.push(savedata)
            }
            res.status(200).send({ message: "inserted data list of school", data: data1 })
        })
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}



// router.get('/property', getSingleProperty)
// router.get('/contactInformation', contactInformation)

router.post('/createcontactInformation', createcontactInformation)
router.get('/featuredProperty/:id', featuredProperty)
router.post('/createInquiry', createInquiry)
router.post('/createReview', createReview)
router.post('/updateprofile', updateprofile)
router.get('/confirmRegister', confirmRegister)
router.get('/getSingleProperty/:id', getSingleProperty)
router.get('/schooldata', schoolData)
router.get('/singleapi', singleapi)
router.get('/propertySubType', totalPropertySubType)
router.post('/createContactUs', createContactUs.createContactUs)
router.get('/totalProperty', totalProperty)
//filters//
// router.get('/')
router.get('/newpropertyData', newpropertyData)
router.get('/gatedCommunitysinglepage', gatedCommunitysinglepage)
router.get('/totalCountyOrparis', totalCountyOrparis)
router.get('/totalCities', totalCities)
router.get('/getuserdetails', auth)
router.get('/searchschoolWithProperty', searchschoolWithProperty)
router.get('/searchpropertyWithSchool', searchpropertyWithSchool)
router.get('/PropertieswithVirtualTourCount', PropertieswithVirtualTourCount)
router.get('/poolsCount', poolsCount)
router.get('/olderPropertyCount', olderPropertyCount)
router.get('/sevendaysorlessPropertyCount', sevendaysorlessPropertyCount)
router.get('/masterOrmainCount', masterOrmainCount)
router.get('/schoolCount', schoolCount)
router.get('/RanchHouseCounts', RanchHouseCounts);
router.get('/HighRiseCount', HighRiseCount)
router.get('/NewbuildsCounts', NewbuildsCounts)
router.get('/AssociationRentRestrictions', FMLS_AssociationRentRestrictionsYNCount)
router.get('/waterfrontCount', waterfrontCount)
router.get('/luxuryHomesCount', luxuryHomesCount)
router.get('/gatedCommunityCount', gatedCommunityCount)
router.get('/countyParishcount', countyParishcount)
router.get('/recenltySoldProperty', recenltySoldProperty)
router.get('/schools', schools)
router.get('/pools', pools)
router.get('/PropertieswithVirtualTour', PropertieswithVirtualTour)
router.get('/olderProperty', olderProperty)
router.get('/sevendaysorlessProperty', sevendaysorlessProperty)
router.get('/bedRoomOrMain', bedRoomOrMain)
router.get('/masterOrmain', masterOrmain)
router.get("/highRise", highRise)
router.get('/RanchHouse', RanchHouse)
router.get("/Newbuilds", Newbuilds)
router.get('/AssociationRentRestrictions', FMLS_AssociationRentRestrictionsYN)
router.get("/primaryfilter", primaryFilters)
router.get("/securityFeature", gatedCommunity)
router.get('/luxuryHomes', luxuryHomes)
router.get('/waterBody', waterfront)
router.get("/allpropertydata", allPropertydataApi)
router.get('/propertyLocal', propertyLocal)
// user
router.post('/login', Login)
// router.get('/logout', Logout)
router.post('/google-login', GoogleLogin)
router.post("/register", userRegistration);
router.get("/authMe", auth, AuthMe);


router.put("/updateLabel/:id", UpdateLabel)
router.get('/dataofquery', queryData);
router.post("/adminregister", registerAdmin)
router.post("/adminlogin", adminLogin)
router.get('/propertyDetails', propertyData);
router.get('/propertypagination', propertyPaginations)
router.post('/forgetpasswordemail', forgetPasswordSendEmail);
router.post("/forgetpassword", forgetPassword);
router.get('/schoolList', schoolList)
router.get("/schoolRatingForProperty", schoolRatingForProperTy)
router.get('/reports', reports);
router.get('/compareFilters', compareFilters)
router.get("/wishlistFilters", wishlistFilters)






router.get('/deleteproperty', async (req: any, res: any) => {
    const result = await property.deleteMany({ CountyOrParish: "Cobb" });
    res.send({ result: result })
})
module.exports = router;
