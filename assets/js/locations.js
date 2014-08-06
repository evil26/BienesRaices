var locations = [
    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.87, 2.29, "propiedad.html", "assets/img/properties/property-01.jpg", "assets/img/property-types/apartment.png"],
    ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.866876, 2.309639, "propiedad.html", "assets/img/properties/property-02.jpg", "assets/img/property-types/apartment.png"],

    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.874796, 2.299275, "propiedad.html", "assets/img/properties/property-03.jpg", "assets/img/property-types/construction-site.png"],
    ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.864194, 2.288868, "propiedad.html", "assets/img/properties/property-04.jpg", "assets/img/property-types/cottage.png"],
    ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.881187, 2.276938, "propiedad.html", "assets/img/properties/property-06.jpg", "assets/img/property-types/garage.png"],
    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.859098, 2.423515, "propiedad.html", "assets/img/properties/property-08.jpg", "assets/img/property-types/houseboat.png"],
    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.872296, 2.287796, "propiedad.html", "assets/img/properties/property-07.jpg", "assets/img/property-types/land.png"],

    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.874457, 2.254386, "propiedad.html", "assets/img/properties/property-09.jpg", "assets/img/property-types/single-family.png"],
    ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.875191, 2.252412, "propiedad.html", "assets/img/properties/property-10.jpg", "assets/img/property-types/villa.png"],
    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.864352, 2.257218, "propiedad.html", "assets/img/properties/property-11.jpg", "assets/img/property-types/vineyard.png"],
    ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.858648, 2.273526, "propiedad.html", "assets/img/properties/property-12.jpg", "assets/img/property-types/warehouse.png"],
    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.856277, 2.264256, "propiedad.html", "assets/img/properties/property-13.jpg", "assets/img/property-types/industrial-site.png"],

    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.859988, 2.252991, "propiedad.html", "assets/img/properties/property-01.jpg", "assets/img/property-types/apartment.png"],
    ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.856954, 2.283912, "propiedad.html", "assets/img/properties/property-05.jpg", "assets/img/property-types/condominium.png"],
    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.879268, 2.270672, "propiedad.html", "assets/img/properties/property-06.jpg", "assets/img/property-types/construction-site.png"],
    ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.875925, 2.3239098, "propiedad.html", "assets/img/properties/property-03.jpg", "assets/img/property-types/cottage.png"],
    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.870393, 2.327771, "propiedad.html", "assets/img/properties/property-04.jpg", "assets/img/property-types/houseboat.png"],

    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.880328, 2.307258, "propiedad.html", "assets/img/properties/property-08.jpg", "assets/img/property-types/land.png"],
    ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.880284, 2.306721, "propiedad.html", "assets/img/properties/property-09.jpg", "assets/img/property-types/single-family.png"],
    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.860342, 2.304597, "propiedad.html", "assets/img/properties/property-10.jpg", "assets/img/property-types/vineyard.png"],
    ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.852549, 2.329574, "propiedad.html", "assets/img/properties/property-11.jpg", "assets/img/property-types/warehouse.png"],
    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.857124, 2.316699, "propiedad.html", "assets/img/properties/property-12.jpg", "assets/img/property-types/empty.png"],

    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.869433, 2.315068, "propiedad.html", "assets/img/properties/property-13.jpg", "assets/img/property-types/apartment.png"],
    ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.885916, 2.297130, "propiedad.html", "assets/img/properties/property-01.jpg", "assets/img/property-types/industrial-site.png"],
    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.893534, 2.276616, "propiedad.html", "assets/img/properties/property-02.jpg", "assets/img/property-types/construction-site.png"],
    ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.872570, 2.237349, "propiedad.html", "assets/img/properties/property-03.jpg", "assets/img/property-types/cottage.png"],
    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.879344, 2.226191, "propiedad.html", "assets/img/properties/property-04.jpg", "assets/img/property-types/garage.png"],

    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.860374, 2.222242, "propiedad.html", "assets/img/properties/property-05.jpg", "assets/img/property-types/condominium.png"],
    ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.845917, 2.265673, "propiedad.html", "assets/img/properties/property-06.jpg", "assets/img/property-types/cottage.png"],
    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.843092, 2.306013, "propiedad.html", "assets/img/properties/property-07.jpg", "assets/img/property-types/warehouse.png"],
    ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.887697, 2.332277, "propiedad.html", "assets/img/properties/property-08.jpg", "assets/img/property-types/apartment.png"],
    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.871441, 2.347555, "propiedad.html", "assets/img/properties/property-07.jpg", "assets/img/property-types/empty.png"],

    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.832438, 2.369270, "propiedad.html", "assets/img/properties/property-09.jpg", "assets/img/property-types/apartment.png"],
    ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.803954, 2.275200, "propiedad.html", "assets/img/properties/property-10.jpg", "assets/img/property-types/apartment.png"],
    ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.879183, 2.252133, "propiedad.html", "assets/img/properties/property-11.jpg", "assets/img/property-types/construction-site.png"],
     /*
     ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.845092, 2.187996, "propiedad.html", "assets/img/properties/property-06.jpg", "assets/img/property-types/cottage.png"],
     ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.909218, 2.179756, "propiedad.html", "assets/img/properties/property-07.jpg", "assets/img/property-types/single-family.png"],

     ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.910120, 2.352104, "propiedad.html", "assets/img/properties/property-01.jpg", "assets/img/property-types/warehouse.png"],
     ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.867681, 2.396736, "propiedad.html", "assets/img/properties/property-05.jpg", "assets/img/property-types/empty.png"],
     ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.826109, 2.350731, "propiedad.html", "assets/img/properties/property-06.jpg", "assets/img/property-types/industrial-site.png"],
     ['3398 Lodgeville Road', "Golden Valley, MN 55427", "$28,000", 48.794908, 2.353477, "propiedad.html", "assets/img/properties/property-03.jpg", "assets/img/property-types/warehouse.png"],
     ['2479 Murphy Court', "Minneapolis, MN 55402", "$36,000", 48.859098, 2.423515, "propiedad.html", "assets/img/properties/property-04.jpg", "assets/img/property-types/empty.png"]

     */
];