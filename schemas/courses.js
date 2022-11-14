export default {
    name: "courses",
    title: "Courses",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
		{
            name: "udemylink",
            title: "Udemy Link",
            type: "string",
        },
        {
            name: "others",
            title: "Others Link",
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
    ],
};
