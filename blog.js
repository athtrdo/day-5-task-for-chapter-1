// Object
// Array
// Looping
// HTML ELement Manipulation

// 1. Get data form ✅
// 2. Grouping by Object ✅
// 3. Store to Array ✅
// 4. Display to HTML page  ✅

let blogs = [] // Variable Global

function addBlog() {
    // Get data form
    let project = document.getElementById('input-blog-project').value;
    let datestart = document.getElementById('input-blog-start').value;
    let dateend = document.getElementById('input-blog-end').value;
    let description = document.getElementById('input-blog-description').value;
    // let tech1 = document.getElementById('input-blog-checkbox1').value;
    // let tech2 = document.getElementById('input-blog-checkbox2').value;
    // let tech3 = document.getElementById('input-blog-checkbox3').value;
    // let tech4 = document.getElementById('input-blog-checkbox4').value;
    let image = document.getElementById('input-blog-image').files[0];

    image = URL.createObjectURL(image)

    // Validation value
    // ....

    // Grouping by Object
    let blog = {
        project: project,
        datestart: datestart,
        dateend: dateend,
        description: description,
        image: image,
        // tech1: tech1,
        // tech2: tech2,
        // tech3: tech3,
        // tech4: tech4
    }

    // Store to Array
    blogs.push(blog)

    renderBlog()
}

function renderBlog() {

    let blogWrapper = document.getElementById('contents');

    blogWrapper.innerHTML = ''


    for (let i = 0; i < blogs.length; i++) {

        blogWrapper.innerHTML +=`         
    <div class="blog-list">
        <div class="blog-list-item">
            <div class="blog-image">
           
                <div class="image" style="margin-left:auto;">
                    <img src="${blogs[i].image}" style= "width: 100%;
                        border-top-left-radius:14px; 
                        border-top-right-radius:14px;">                  
                    <h1> 
                    <a href="detail.html">${blogs[i].project}</a>
                    </h1>
                    <h6>Dari ${blogs[i].datestart} sampai ${blogs[i].dateend}</h6>
                    <br>
                    <p style="text-align: center;">${blogs[i].description}</p>

                    <div class="icontech">
                        <div class="icon-wrapper">
                            <div class="icon">
                                    <i> <img src="./assets/img/Next.png" alt="" style="width: 50px; height: 50px;"></i>
                            </div>
                            <div class="icon">
                                    <i><img src="./assets/img/TS.png" alt="" style="width: 50px; height: 50px;"></i>
                            </div>
                            <div class="icon">
                                    <i><img src="./assets/img/React.png" alt="" style="width: 50px; height: 50px;"></i>    
                            </div>
                            <div class="icon">
                                    <i><img src="./assets/img/Node.png" alt="" style="width: 50px; height: 50px;"></i>
                            </div>
                        </div>
                    </div>

                    
                    </div>
                </div>
            </div>          
        </div>
    </div>`
        
    }

}

