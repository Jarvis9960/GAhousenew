
import mongoose from "mongoose";
const propertdataSchema = new mongoose.Schema({
    labels: {
        type: Array,
        default: [],
        tags: {
            type: 'array',
            items: { type: 'string', uniqueItems: true }
        }
    },
    '@odata.context': {
        type: String,
        default: null
    },
    "@odata.id": {
        type: String,
        default: null,

    },
    Heating: {
        type: Array,
        default: null
    },
    StreetDirPrefix: {
        type: String,
        default: null
    },
    FMLS_MlsPropertyType: {
        type: String,
        default: null
    },
    BedroomsTotal: {
        type: String,
        default: null
    },
    LeaseAssignableYN: {
        type: String,
        default: null
    },
    FMLS_Deposit: {
        type: String,
        default: null
    },
    FMLS_CertProfHomeBldrs: {
        type: String,
        default: null
    },
    CoListAgentDirectPhone: {
        type: String,
        default: null
    },
    FMLS_PetDepositAmount: {
        type: String,
        default: null
    },
    FMLS_RepresentativeofPropertyYN: {
        type: String,
        default: null
    },
    FMLS_OpenHouseCount: {
        type: String,
        default: null
    },
    CarportSpaces: {
        type: String,
        default: null
    },
    OnMarketDate: {
        type: String,
        default: null
    },
    FMLS_SaleIncludes: [{
        type: String,
        default: null
    }],
    LaundryFeatures: [{
        type: String,
        default: null
    }],
    MajorChangeTimestamp: {
        type: String,
        default: null
    },
    Flooring: [{
        type: String,
        default: null
    }],
    PhotosCount: {
        type: String,
        default: null
    },
    FMLS_DPRURL2: {
        type: String,
        default: null
    },
    FMLS_GrossExpensesAmount: {
        type: String,
        default: null
    },
    FireplacesTotal: {
        type: String,
        default: null
    },
    FMLS_MinHouseSQFT: {
        type: String,
        default: null
    },
    FMLS_MoveInFeeYN: {
        type: String,
        default: null
    },
    WaterfrontFeatures: [{ type: String }],
    CoBuyerAgentDirectPhone: {
        type: String,
        default: null
    },
    RoomBedroomFeatures: [{ type: String }],
    Cooling: [{ type: String }],
    FMLS_SchoolBusRouteElemYN: {
        type: String,
        default: null
    },
    ExteriorFeatures: [{ type: String }],
    FMLS_PerFamilyAmount: {
        type: String,
        default: null
    },
    FMLS_InitiationFee: {
        type: String,
        default: null
    },
    SourceSystemID: {
        type: String,
        default: null
    },
    FMLS_LoadingDesc: [{ type: String }],
    StatusChangeTimestamp: {
        type: String,
        default: null
    },
    Longitude: {
        type: Number,
        default: null
    }
    ,
    AvailabilityDate: {
        type: String,
        default: null
    },
    SecurityFeatures: [{ type: String }],
    BuyerAgentFullName: {
        type: String,
        default: null
    },
    PublicRemarks: {
        type: String,
        default: null
    },
    FMLS_RoadFrontFeet: {
        type: String,
        default: null
    },
    FMLS_MaximumRentalMonths: {
        type: String,
        default: null
    },
    FMLS_AssessmentDueContemplatedYN: {
        type: String,
        default: null
    },
    FMLS_OfficeRemarks: {
        type: String,
        default: null
    },
    AssociationFeeFrequency: {
        type: String,
        default: null
    },
    FMLS_District: {
        type: String,
        default: null
    },
    WaterBodyName: {
        type: String,
        default: null
    },
    FMLS_Timber: [{ type: String }],
    CoListOfficeName: {
        type: String,
        default: null
    },
    PurchaseContractDate: {
        type: String,
        default: null
    },
    RoadSurfaceType: [{ type: String }],
    AboveGradeFinishedArea: {
        type: String,
        default: null
    },
    PriceChangeTimestamp: {
        type: String,
        default: null
    },
    RoomDiningRoomFeatures: [{
        type: String,
        default: null
    }],
    ListingKeyNumeric: {

        type: String,
        default: null,

    },
    MajorChangeType: {
        type: String,
        default: null
    },
    LeasableArea: {
        type: String,
        default: null
    },
    ListingContractDate: Date,
    Zoning: {
        type: String,
        default: null
    },
    CoBuyerAgentKeyNumeric: {
        type: String,
        default: null
    },
    Appliances: [{ type: String }],
    FMLS_AlsoListedinFMLSForSaleYN: {
        type: String,
        default: null
    },
    TaxAnnualAmount: {
        type: Number,
        default: null
    },
    ListOfficeName: {
        type: String,
        default: null
    },
    CoBuyerOfficeName: {
        type: String,
        default: null
    },
    BelowGradeFinishedArea: {
        type: String,
        default: null
    },
    TaxBlock: {
        type: String,
        default: null
    },
    Basement: [{ type: String }],
    CurrentUse: [{ type: String }],
    OriginatingSystemKey: {
        type: String,
        default: null
    },
    BusinessType: [{ type: String }],
    FMLS_MoveOutFeeAmount: {
        type: String,
        default: null
    },
    CountyOrParish: {
        type: String,
        default: null
    },
    DualVariableCompensationYN: Boolean,
    Latitude: {
        type: Number,
        default: null
    },
    PropertyType: {
        type: String,
        default: null
    },
    PhotosChangeTimestamp: Date,
    ListPrice: {
        type: String,
        default: null
    },
    BuyerAgentKeyNumeric: {
        type: String,
        default: null
    },
    TaxParcelLetter: {
        type: String,
        default: null
    },
    RoadFrontageType: [{ type: String }],
    OriginatingSystemName: {
        type: String,
        default: null
    },
    ListOfficePhone: {
        type: String,
        default: null
    },
    FMLS_LandLot: {
        type: String,
        default: null
    },
    GreenEnergyGeneration: [{
        type: String,
        default: null
    }],
    FMLS_CreditReportRequiredYN: {
        type: String,
        default: null
    },
    AssociationYN: {
        type: String,
        default: null
    },
    MlsStatus: {
        type: String,
        default: null
    },
    StreetNumber: {
        type: String,
        default: null
    },
    CoListOfficeMlsId: {
        type: String,
        default: null
    },
    FMLS_MaximumContinuousSpace: {
        type: String,
        default: null
    },
    UniversalPropertyId: {
        type: String,
        default: null
    },
    LeaseTerm: {
        type: String,
        default: null
    },
    ListingKey: {
        unique: true,
        type: String,
        default: null
    },
    AssociationFee2Frequency: {
        type: String,
        default: null
    },
    FMLS_LeaseIncludes: [{ type: String }],
    FMLS_PreviousStatus: {
        type: String,
        default: null
    },
    StateOrProvince: {
        type: String,
        default: null
    },
    CommonWalls: [{ type: String }],
    FMLS_SpecialCircumstances: [{ type: String }],
    FMLS_UnitCount: {
        type: Number,
        default: null
    },
    GreenBuildingVerificationType: [{ type: String }],
    FMLS_AssociationRentRestrictionsYN: {
        type: String,
        default: null
    },
    ListAgentKeyNumeric: {
        type: Number,
        default: null
    },
    MiddleOrJuniorSchool: {
        type: String,
        default: null
    },
    AssociationFeeIncludes: [{ type: String }],
    FMLS_ApplicationFeePerFamilyYN: {
        type: String,
        default: null
    },
    VirtualTourURLUnbranded: {
        type: String,
        default: null
    },
    Vegetation: [{ type: String }],
    FMLS_CommonAreaMtncFee: {
        type: String,
        default: null
    },
    ElementarySchool: {
        type: String,
        default: null
    },
    StreetDirSuffix: {
        type: String,
        default: null
    },
    ListOfficeKeyNumeric: {
        type: Number,
        default: null
    },
    FMLS_PriceAcreAmount: {
        type: Number,
        default: null
    },
    CoBuyerOfficePhone: {
        type: String,
        default: null
    },
    FMLS_NumberofUnitsToBeBuilt: {
        type: String,
        default: null
    },
    Directions: {
        type: String,
        default: null
    },
    BridgeModificationTimestamp: Date,
    ListAgentFullName: {
        type: String,
        default: null
    },
    FMLS_DuplicateMLSNumber: {
        type: String,
        default: null
    },
    MainLevelBathrooms: {
        type: String,
        default: null
    },
    StandardStatus: {
        type: String,
        default: null
    },
    Roof: [{ type: String }],
    PropertyCondition: [{ type: String }],
    ParkingTotal: {
        type: String,
        default: null
    },
    FMLS_AvailableLeaseType: [{ type: String }],
    CoListOfficeKeyNumeric: {
        type: String,
        default: null
    },
    GrossIncome: {
        type: String,
        default: null
    },
    ParcelNumber: {
        type: String,
        default: null
    },
    PoolPrivateYN: {
        type: String,
        default: null
    },
    FMLS_ReservationDeposit: {
        type: String,
        default: null
    },
    FMLS_DepositRequired: [{ type: String }],
    AdditionalParcelsDescription: {
        type: String,
        default: null
    },
    ListingTerms: [{ type: String }],
    BuilderName: {
        type: String,
        default: null
    },
    View: [{ type: String }],
    FMLS_RemineModifiedDT: {
        type: String,
        default: null
    },
    OperatingExpense: {
        type: String,
        default: null
    },
    FMLS_VirtualTourURLUnbranded2: {
        type: String,
        default: null
    },
    PropertySubType: {
        type: String,
        default: null
    },
    BuyerAgentDirectPhone: {
        type: String,
        default: null
    },
    FMLS_ApplicationFeePerAdultYN: {
        type: String,
        default: null
    },
    HighSchool: {
        type: String,
        default: null
    },
    HomeWarrantyYN: {
        type: String,
        default: null
    },
    Levels: [{
        type: String,
        default: null
    }],
    FMLS_GCCMLNumber: {
        type: String,
        default: null
    },
    InteriorFeatures: [{
        type: String,
        default: null
    }],
    BathroomsFull: {
        type: String,
        default: null
    },
    LockBoxType: [{ type: String }],

    LotSizeAcres: {
        type: Number,
        default: null
    },
    SubdivisionNameL: {
        type: String,
        default: null
    },
    CoBuyerAgentMlsId: {
        type: String,
        default: null
    },
    FMLS_CurrentPrice: {
        type: String,
        default: null
    },
    Fencing: [{ type: String }],
    InternetAddressDisplayYN: {
        type: String,
        default: null
    },
    LotSizeSource: {
        type: String,
        default: null
    },
    CloseDate: Date,
    StreetSuffix: {
        type: String,
        default: null
    },
    ListAgentMlsId: {
        type: String,
        default: null
    },
    HorseAmenities: [{ type: String }],
    FMLS_MinimumRentalMonths: {
        type: String,
        default: null
    },
    WaterSource: [{ type: String }],
    FMLS_PublicRemarksExtra: {
        type: String,
        default: null
    },
    LotSizeDimensions: {
        type: String,
        default: null
    },
    YearBuilt: {
        type: String,
        default: null
    },
    FMLS_SchoolBusRouteMiddleYN: {
        type: String,
        default: null
    },
    PropertyAttachedYN: Boolean,
    TaxLot: {
        type: String,
        default: null
    },
    FMLS_Management: {
        type: String,
        default: null
    },
    CoBuyerOfficeMlsId: {
        type: String,
        default: null
    },
    OriginatingSystemID: {
        type: String,
        default: null
    },
    ZoningDescription: {
        type: String,
        default: null
    },
    LandLeaseYN: {
        type: String,
        default: null
    },
    PreviousListPrice: {
        type: Number,
        default: null
    },
    FMLS_AttributionContact: {
        type: String,
        default: null
    },
    FMLS_SwimTennisFee: {
        type: Number,
        default: null
    },
    PetsAllowed: [{
        type: String,
        default: null
    }],
    DaysOnMarket: {
        type: Number,
        default: null
    },
    UnitNumber: {
        type: String,
        default: null
    },
    RoomKitchenFeatures: [{ type: String }],
    BuyerAgencyCompensationType: {
        type: String,
        default: null
    },
    NetOperatingIncome: {
        type: String,
        default: null
    },
    OtherStructures: [{ type: String }],
    FMLS_SwimTennisFeeDue: {
        type: String,
        default: null
    },
    BodyType: [{ type: String }],
    ListOfficeMlsId: {
        type: String,
        default: null
    },
    FMLS_AssumableYN: Boolean,
    ClosePrice: {
        type: String,
        default: null
    },
    FMLS_SectionGMD: {
        type: String,
        default: null
    },
    FMLS_HERSIndexRating: {
        type: String,
        default: null
    },
    ListAgentDirectPhone: {
        type: String,
        default: null
    },
    RoomType: [{ type: String }],
    FMLS_BuyerFirmMlsId: {
        type: String,
        default: null
    },
    CoListAgentFullName: {
        type: String,
        default: null
    },
    FMLS_FHACondoApprovalYN: {
        type: String,
        default: null
    },
    StreetNumberNumeric: {
        type: String,
        default: null
    },
    FMLS_RestrictionsRequirements: [{
        type: String,
        default: null
    }],
    SpaFeatures: [{ type: String }],
    CoListAgentKeyNumeric: {
        type: String,
        default: null
    },
    ParkingFeatures: [{ type: String }],
    PostalCodePlus4: {
        type: String,
        default: null
    },
    BathroomsHalf: {
        type: String,
        default: null
    },
    FMLS_WaterfrontageLength: {
        type: Number,
        default: null
    },
    PoolFeatures: [{ type: String }],
    NumberOfUnitsInCommunity: {
        type: String,
        default: null
    },
    Sewer: [{ type: String }],
    BuildingAreaSource: {
        type: String,
        default: null
    },
    CoListAgentMlsId: {
        type: String,
        default: null
    },
    FMLS_NumberofEntrances: {
        type: String,
        default: null
    },
    StreetName: {
        type: String,
        default: null
    },
    OwnerPays: [{ type: String }],
    FMLS_RecommendedZoning: [{ type: String }],
    PatioAndPorchFeatures: [{ type: String }],
    FMLS_SchoolBusRouteHighYN: {
        type: String,
        default: null
    },
    FMLS_SaleOptions: [{ type: String }],
    MainLevelBedrooms: {
        type: String,
        default: null
    },
    BuyerOfficePhone: {
        type: String,
        default: null
    },
    FMLS_ActiveOpenHouseCount: {
        type: Number,
        default: null
    },
    Utilities: [{ type: String }],
    FireplaceFeatures: [{
        type: String,
        default: null
    }],
    FMLS_MoveInFeeAmount: {
        type: String,
        default: null
    },
    ListingId: {
        type: String,
        unique: true,
    },
    WindowFeatures: [{
        type: String,
        default: null
    }],
    SpecialListingConditions: [{ type: String }],
    CommunityFeatures: [{
        type: String,
        default: null
    }],
    BathroomsTotalInteger: {
        type: String,
        default: null
    },
    FMLS_MinimumSpaceAvailable: {
        type: String,
        default: null
    },
    NumberOfBuildings: {
        type: String,
        default: null
    },
    FMLS_Dock: [{ type: String }],
    GarageSpaces: {
        type: String,
        default: null
    },
    OriginalListPrice: {
        type: Number,
        default: null
    },
    FMLS_BelowGradeUnfinishedArea: {
        type: String,
        default: null
    },
    AssociationFee2: {
        type: String,
        default: null
    },
    GreenEnergyEfficient: [{ type: String }],
    Media: {
        type: Array,
        default: null
    },
    BuildingAreaUnits: {
        type: String,
        default: null
    },
    CapRate: {
        type: String,
        default: null
    },
    FMLS_OwnerFinancingYN: {
        type: String,
        default: null
    },
    City: {
        type: String,
        default: null
    },
    InternetEntireListingDisplayYN: Boolean,
    FMLS_MoveOutFeeYN: {
        type: String,
        default: null
    },
    BuyerAgencyCompensation: {
        type: String,
        default: null
    },
    CoBuyerOfficeKeyNumeric: {
        type: String,
        default: null
    },
    BuyerOfficeKeyNumeric: {
        type: String,
        default: null
    },
    AccessibilityFeatures: [{
        type: String,
        default: null
    }],
    TaxYear: Number,
    FMLS_OwnerSecondYN: {
        type: String,
        default: null
    },
    Ownership: {
        type: String,
        default: null
    },
    BuyerAgentMlsId: {
        type: String,
        default: null
    },
    FMLS_DPRYN: {
        type: String,
        default: null
    },
    FMLS_CeilingHeight: {
        type: String,
        default: null
    },
    SourceSystemName: {
        type: String,
        default: null
    },
    LotFeatures: [{ type: String }],
    FMLS_AnnualUtilitiesAmount: {
        type: String,
        default: null
    },
    PostalCode: {
        type: Number,
        default: null
    },
    PossibleUse: [{
        type: String,
        default: null
    }],
    Furnished: {
        type: String,
        default: null
    },
    FMLS_ListFirmMlsId: {
        type: String,
        default: null
    },
    BuyerOfficeMlsId: {
        type: String,
        default: null
    },
    DocumentsAvailable: [{ type: String }],
    ConstructionMaterials: [{ type: String }],
    ListOfficeURL: {
        type: String,
        default: null
    },
    NumberOfUnitsTotal: {
        type: String,
        default: null
    },
    BuyerOfficeName: {
        type: String,
        default: null
    },
    AssociationFee: {
        type: Number,
        default: null
    },
    CoBuyerAgentFullName: {
        type: String,
        default: null
    },
    FMLS_RemineAccessCode: {
        type: String,
        default: null
    },
    TenantPays: [{ type: String }],
    FMLS_DPRURL: {
        type: String,
        default: null
    },
    RoomBasementLevel: {
        type: String,
        default: null
    },
    Electric: [{ type: String }],
    ArchitecturalStyle: [{ type: String }],
    RoomMasterBathroomFeatures: [{ type: String }],
    UnparsedAddress: {
        type: String,
        default: null
    },
    CoListOfficePhone: {
        type: String,
        default: null
    },
    BuildingAreaTotal: {
        type: String,
        default: null
    },
    OtherEquipment: [{ type: String }],
    FMLS_EscalationType: {
        type: String,
        default: null
    },
    HabitableResidenceYN: {
        type: String,
        default: null
    },
    FeedTypes: [{ type: String }],
    label: {
        type: Array,
        default: null

    }


})

const property = mongoose.model('property', propertdataSchema);
export default property;
