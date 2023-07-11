export default {
    name: "courses",
    title: "Courses",
    type: "document",
    fields: [
		{
			name: "index",
			title: "Serial No.",
			type: "string",
		},
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'string',
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
		{
            name: "type",
            title: "Type (Course/Tool)",
            type: "string",
        },
        {
            name: "price",
            title: "Price",
            type: "string",
        },
        {
            name: "discountprice",
            title: "Discount Price",
            type: "string",
        },
		{
            name: "enroll",
            title: "Total Enrollment",
            type: "string",
        },
        {
            name: 'coursemodule',
            title: 'Course Module',
            type: 'file',
            options: {
                accept: '.pdf'
            }
        },
        {
            name: 'prerequisite',
            type: 'document',
            fields: [
                {
                    name: 'prerequisite',
                    type: 'text',
                    title: 'Prerequisite',
                    rows: 8
                }
            ]
        },
        {
            name: "level",
            title: "Course Level",
            type: "string",
        },
        {
            name: "registration",
            title: "Registration Form Link",
            type: "string",
            options: {
                default: "Set the form link"
            }
        },
        {
            name: "others",
            title: "Other",
            type: "string",
        },
        {
            name: "imgUrl",
            title: "ImageUrl",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [
                {
                    name: "tag",
                    title: "Tag",
                    type: "string",
                },
            ],
        },
		{
            name: "authorProfile",
            title: "Author Profile",
            type: "image",
            options: {
                hotspot: true,
            },
        },
		{
            name: "authorName",
            title: "Autor Name",
            type: "string",
        },
		{
            name: "authorTitle",
            title: "Author Title",
            type: "string",
        },
		{
            name: "link",
            title: "Social Link",
            type: "string",
        },
    ],
};
