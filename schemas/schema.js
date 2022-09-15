import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import works from "./works";
import testimonials from "./testimonials";
import abouts from "./abouts";
import skills from "./skills";
import contact from "./contact";
import certificates from "./certificates";

export default createSchema({
    name: "default",
    types: schemaTypes.concat([
        works,
        testimonials,
        abouts,
        skills,
        contact,
        certificates,
    ]),
});
