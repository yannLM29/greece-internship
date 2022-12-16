let custom_inputs = document.getElementById("custom-inputs");
let add_button = document.getElementById("add");
let type_of_input = document.getElementById("input-type");
let name_of_input = document.getElementById("input-name");
let name_of_option = document.getElementById("new-option");
let add_option = document.getElementById("add-option");
let all_options = document.getElementById("all-options");
let print = document.getElementById("print");
let table = document.getElementById('table');

let isTablePrepared = false;

add_button.onclick = () => {

    let new_label = document.createElement('label');
    new_label.for = name_of_input.value;
    new_label.innerText = name_of_input.value;

    let new_input = null;

    if(type_of_input.value == "select")
    {
        new_input = document.createElement('select');
        let options = document.createElement('option');
        let option2 = document.createElement('option');

        new_input.name = name_of_input.value;

        for(const option of all_options.children)
        {
            let new_option = document.createElement('option');
            new_option.value = option.innerText;
            new_option.innerText = option.innerText;

            new_input.appendChild(new_option);
        };
        

        all_options.innerHTML= "";

    }
    else if(type_of_input.value == "text")
    {

        new_input = document.createElement('input')
        new_input.type = "text";
        new_input.name = name_of_input.value;
        new_input.id = name_of_input.value;

    }
    else
    {
        return;
    }

    new_label.onclick = () => {
        if(document.getElementById('remove').checked)
        {
            console.log("In")
            custom_inputs.removeChild(new_label);
            custom_inputs.removeChild(new_input);

            isTablePrepared = false;
        }
    
    }

    custom_inputs.appendChild(new_label);
    custom_inputs.appendChild(new_input);

    isTablePrepared = false;
}

type_of_input.onclick = () => {
    
    if(type_of_input.value == "select")
    {
        name_of_option.disabled = false;
        add_option.disabled = false;
    }
    else
    {
        all_options.innerHTML = "";
        name_of_option.disabled = true;
        add_option.disabled = true;
    }
}

add_option.onclick = () => {

    let new_option = document.createElement('li')
    new_option.innerText = name_of_option.value;

    all_options.appendChild(new_option);
}

print.onclick = () => {
    let div = document.getElementById('table-div');
    
    if(!isTablePrepared)
    {
        table.innerHTML = "";
        let titles = document.createElement('tr');
        for(const input of custom_inputs.children)
        {
            if(input.type != null)
            {
                let test = document.createElement('th');
                test.innerText = input.name;
                titles.appendChild(test);
            }
            
        } 
        table.appendChild(titles);


        isTablePrepared = true;
    }

    let new_line_values = document.createElement('tr');
    for(const input of custom_inputs.children)
    {
        if(input.type != null)
        {
            let test = document.createElement('td');
            test.innerText = input.value;
            new_line_values.appendChild(test);
        }
        
    }
    table.appendChild(new_line_values);

}


console.log("OK");
console.log(custom_inputs)