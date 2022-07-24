
let Projects = [] // Variable Global


function renderProject() {

    let projectWrapper = document.getElementById('contents');

    projectWrapper.innerHTML = ''


    for (let i = 0; i < Projects.length; i++) {

        projectWrapper.innerHTML +=`         
    <div class="project-list">
        <div class="project-list-item">
            <div class="project-image">
                <div class="image" style="margin-left:auto;">
                    <img src="${Projects[i].image}" style= "width:100px height:200px;
                        border-top-left-radius:14px; 
                        border-top-right-radius:14px;">                  
                    <h1 style="font-size: 15px; text-align: center;"> 
                    <a href="detail.html">${Projects[i].name}</a>
                    </h1>
                    <br>
                    <textarea style="text-align: center; resize: none;">${Projects[i].description}</textarea>
                        <div style="text-align: right; color: white; font-size: 10px">
                           Duration: ${Projects[i].disTime} Months
                        </div>

                    <div class="icontech">
                        <div class="icon-wrapper">
                            <div class="icon">
                                    <i>${Projects[i].Tech1?`<img src="./assets/img/Next.png" alt="" style="width: 50px; height: 50px;">`: ""}</i>   
                            </div>
                            <div class="icon">
                                    <i>${Projects[i].Tech2?`<img src="./assets/img/TS.png" alt="" style="width: 50px; height: 50px;">`: ""}</i>
                            </div>
                            <div class="icon">
                                    <i>${Projects[i].Tech3?`<img src="./assets/img/React.png" alt="" style="width: 50px; height: 50px;">`: ""}</i>    
                            </div>
                            <div class="icon">
                                    <i>${Projects[i].Tech4?`<img src="./assets/img/Node.png" alt="" style="width: 50px; height: 50px;">`: ""}</i>
                            </div>
                        </div>
                    </div>
                    <div class="button">
                        <div class="left-button">
                            <button>Edit</button>
                        </div>
                        <div class="right-button">
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    </div>`
        
    }

}


function addProject() {
    // Get data form
    let name = document.getElementById('input-project-name').value;
    let startdate = document.getElementById('input-date-start').value;
    let enddate = document.getElementById('input-date-end').value;
    let description = document.getElementById('input-project-description').value;
    let Tech1 = document.getElementById('Tech1').checked;
    let Tech2 = document.getElementById('Tech2').checked;
    let Tech3 = document.getElementById('Tech3').checked;
    let Tech4 = document.getElementById('Tech4').checked;
    let image = document.getElementById('input-project-image').files[0];


   startdate = new Date(startdate).getMonth()
   enddate = new Date(enddate).getMonth()



    image = URL.createObjectURL(image)

    // Validation value
    if(name == ''){
        alert('Nama Required...');
        return
    } 
    if(startdate == ''){
        alert('Startdate Required...');
        return
    } 
    if(enddate == ''){
        alert('Enddate Required...');
        return
    } 
    if(description == ''){
        alert('Description Project Required...');
        return
    } 
    if(image == ''){
        alert('image Required...');
        return
    } 

    alert('Are you sure filled out?');

    // Grouping by Object
    let myProject = {
        name,
        disTime : enddate - startdate,
        description,
        Tech1,
        Tech2,
        Tech3,
        Tech4,
        image,    
    }

    
    Projects.push(myProject)

    renderProject()
}