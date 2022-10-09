const tableData = {
    actions: [
        {
            name: "delete",
            url: "/products/:id"
        }
    ],
    fields: [
        {
            key: "id",
            name: "ID",
            type: "text"
        },
        {
            key: "name",
            name: "Title",
            type: "text"
        },
        {
            key: "description",
            name: "Description",
            type: "text"
        },
        {
            key: "action",
            name: "Actions",
            type: "action"
        },
    ],
    data: [
        {
            id: 1,
            name: "This is a title",
            description: "This might be a description but the long one",
        },
        {
            id: 2,
            name: "This is a title",
            description: "This might be a description but the long one",
        },
    ]
}

function renderFields(table) {
    return `
    <tr>${table.fields.map((field) => renderField(field, table)).join('')}</tr>
    `
}

function renderField(field, table) {
    var cantRenderable = field.type === "action" && table.actions.length === 0
    if (!cantRenderable) {
        return `<th>${field.name}</th>`
    }
    return ``
}

function renderData(table) {
    return table.data.map((item) => renderDataItem(item, table)).join('')
}

function renderDataItem(item, table) {
    var columns = table.fields.map((field) => {
        if (field.type !== "action") {
            return `<td>${item[field.key]}</td>`
        }
        return ``
    }).join('')
    columns += actionsBuilder(table.actions,item)
    return `<tr>${columns}</tr>`
}

function actionsBuilder(actions,item) {
    return actions.map((action) => {
        var link = action.url.replace(':id',item.id)

        return `<td><a href="${link}">${action.name}</a></td>`
    }).join('')
}

export default function render() {
    return `<main class="main">
    <div class="main-header">
      <div class="main-header__heading">Product Index</div>
      <div class="main-header__updates"><button>Create</button></div>
    </div>

    <div class="main-overview">
<div class="table-container">
      <table class="table-rwd">
        ${renderFields(tableData)}
        ${renderData(tableData)}
      </table>
    </div>
    </div>
  </main>
`;
}