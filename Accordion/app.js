// 1. Select all elements with class 'accordion-item' (NodeList)
const accordion = document.querySelectorAll('.accordion-item');

// 2. Iterate through each accordion item
accordion.forEach(item => {
    // 3. Find title element within current accordion item
    const title = item.querySelector('.accordion-title');
    
    // 4. Add click handler to title element
    title.addEventListener('click', () => {
        // 5. Loop through all accordion items using index-based for loop
        for (let i=0; i<accordion.length; i++) {
            // 6. Check if current iteration item is NOT the clicked item
            if(accordion[i] != item) {
                // 7. Remove 'active' class from other items
                accordion[i].classList.remove('active')
            }
            else {
                // 8. Toggle 'active' class on clicked item
                item.classList.toggle('active');
            }
        }
    })
})