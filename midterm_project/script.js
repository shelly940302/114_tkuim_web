const allIngredients = [
  "雞肉","豬肉","青椒","洋蔥","蛋","豆腐","海帶",
  "青菜","牛奶","雞蛋","砂糖","巧克力","番茄"
];

const recipes = {
  main: [
    { name: "三杯雞", mainIngredients:["雞肉"], additionalIngredients:["九層塔","醬油","米酒","薑"] },
    { name: "蔥爆豬肉", mainIngredients:["豬肉"], additionalIngredients:["蔥","醬油"] },
    { name: "青椒炒肉", mainIngredients:["豬肉","青椒"], additionalIngredients:["蔥","醬油","胡椒"] },
    { name: "炒時蔬", mainIngredients:["青菜"], additionalIngredients:["蒜","鹽"] },
  { name: "洋蔥炒蛋", mainIngredients:["洋蔥","蛋"], additionalIngredients:["鹽","油"] },
    { name: "番茄炒蛋", mainIngredients:["蛋","番茄"], additionalIngredients:["鹽"] },
    { name: "蛋餅", mainIngredients:["蛋"], additionalIngredients:["麵粉"] }
  ],
  soup: [
    { name: "海帶豆腐味噌湯", mainIngredients:["海帶","豆腐"], additionalIngredients:["味噌"] },
    { name: "番茄蛋花湯", mainIngredients:["蛋","番茄"], additionalIngredients:["鹽"] },
    { name: "清燉雞湯", mainIngredients:["雞肉"], additionalIngredients:["薑"] }
  ],
  dessert: [
    { name: "牛奶布丁", mainIngredients:["牛奶","雞蛋"], additionalIngredients:["砂糖"] },
    { name: "巧克力慕斯", mainIngredients:["巧克力"], additionalIngredients:["鮮奶油","砂糖"] }
  ]
};

function showHomePage(){
  const app = document.getElementById("app");
  // Build main menu (首頁 / 表單) and a content container
  app.innerHTML = '';


  // use semantic nav with links (Bootstrap nav-pills) so it's a navigation bar
  const nav = document.createElement('nav');
  nav.className = 'w-100 mb-0';

  const ul = document.createElement('ul');
  ul.className = 'nav nav-pills w-100 main-menu';

  function makeNavItem(text, view){
    const li = document.createElement('li');
    li.className = 'nav-item';
    const a = document.createElement('a');
    a.className = 'nav-link flex-fill text-center';
    a.href = '#';
    a.dataset.view = view;
    a.textContent = text;
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      // set active
      document.querySelectorAll('.main-menu .nav-link').forEach(n=> n.classList.remove('active'));
      a.classList.add('active');
      // navigate
      if(view==='welcome') showWelcome();
      else if(view==='recipe') showIngredientSelect();
      else if(view==='form') showFeedbackForm();
    });
    li.appendChild(a);
    return a;
  }

  const welcomeLink = makeNavItem('首頁','welcome');
  const recipeLink = makeNavItem('食譜','recipe');
  const formLink = makeNavItem('表單','form');

  ul.appendChild((welcomeLink.parentElement));
  ul.appendChild((recipeLink.parentElement));
  ul.appendChild((formLink.parentElement));
  nav.appendChild(ul);

  const content = document.createElement('div');
  content.id = 'contentArea';

  const topMenuContainer = document.getElementById('topMenu');
  if(topMenuContainer){
    topMenuContainer.innerHTML = '';
    topMenuContainer.appendChild(nav);
  } else {
    app.appendChild(nav);
  }
  app.appendChild(content);

  // default to welcome view (activate welcome link)
  // trigger click to initialize
  setTimeout(()=>{ welcomeLink.click(); }, 0);
}

// Welcome content (首頁)
function showWelcome(){
  const content = document.getElementById('contentArea') || document.getElementById('app');
  content.innerHTML = '';
  // create inner white card to improve contrast on full-width layout
  const inner = document.createElement('div');
  inner.className = 'app-inner';
  const h = document.createElement('h2');
  h.textContent = '歡迎來到廚房小助手';
  const p = document.createElement('p');
  p.className = 'mb-0 lead';
  p.textContent = '在「食譜」中勾選你現有的食材（可複選），系統會根據主料與生成模式推薦可做的料理。';
  inner.appendChild(h);
  inner.appendChild(p);
  content.appendChild(inner);
}
// Feedback form view
function showFeedbackForm(){
  const content = document.getElementById('contentArea') || document.getElementById('app');
  content.innerHTML = '';

  const inner = document.createElement('div'); inner.className = 'app-inner';
  const heading = document.createElement('h2');
  heading.textContent = '意見回饋表單';
  inner.appendChild(heading);

  const form = document.createElement('form');
  form.className = 'row g-2 needs-validation';

  const nameDiv = document.createElement('div');
  nameDiv.className = 'col-12';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = '姓名 (必填)';
  nameInput.required = true;
  nameInput.className = 'form-control w-100';
  nameDiv.appendChild(nameInput);

  const emailDiv = document.createElement('div');
  emailDiv.className = 'col-12';
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = '電子郵件 (必填)';
  emailInput.required = true;
  emailInput.className = 'form-control w-100';
  emailDiv.appendChild(emailInput);

  const msgDiv = document.createElement('div');
  msgDiv.className = 'col-12';
  const msgInput = document.createElement('textarea');
  msgInput.placeholder = '請輸入您的意見或建議';
  msgInput.required = true;
  msgInput.className = 'form-control w-100';
  msgInput.rows = 4;
  msgDiv.appendChild(msgInput);

  const submitDiv = document.createElement('div');
  submitDiv.className = 'col-12 d-flex gap-2';
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.className = 'btn btn-success';
  submitBtn.textContent = '送出';
  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.className = 'btn btn-outline-secondary';
  cancelBtn.textContent = '取消';
  cancelBtn.addEventListener('click', ()=>{
    // go back to homepage view (click nav welcome link)
    document.querySelector('.main-menu .nav-link[data-view="welcome"]')?.click();
  });
  submitDiv.appendChild(submitBtn);
  submitDiv.appendChild(cancelBtn);

  form.appendChild(nameDiv);
  form.appendChild(emailDiv);
  form.appendChild(msgDiv);
  form.appendChild(submitDiv);

  // validation and submit handler
  form.addEventListener('submit', function(e){
    if(!form.checkValidity()){
      // show browser validation UI
      form.querySelectorAll('input, textarea').forEach(el=> el.reportValidity());
      e.preventDefault();
      return;
    }
    e.preventDefault();
    // show thank you message
    content.innerHTML = '';
    const thanks = document.createElement('div');
    thanks.className = 'alert alert-success';
    thanks.textContent = '感謝您的回饋！我們已收到您的意見。';
    content.appendChild(thanks);
  // reset main menu to home after short delay
  setTimeout(()=>{ document.querySelector('.main-menu .nav-link[data-view="welcome"]')?.click(); }, 1500);
  });

  inner.appendChild(form);
  content.appendChild(inner);
}

function showIngredientSelect(){
  const app = document.getElementById("app");
  app.innerHTML = "";

  const heading = document.createElement('h2');
  heading.textContent = '請勾選你有的食材';

  // create a grid with left (form) and right (result) columns
  const gridWrap = document.createElement('div');
  gridWrap.className = 'app-inner app-grid';

  const form = document.createElement('form');
  form.id = 'ingredientsForm';
  form.style.minWidth = '260px';

  const ingredientsBox = document.createElement('div');
  ingredientsBox.className = 'ingredients-box';

  // create checkboxes using DOM API (use Bootstrap form-check for nicer layout)
  allIngredients.forEach((name, idx) => {
  const wrap = document.createElement('div');
  // make each checkbox row fill the available width
  wrap.className = 'form-check w-100';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = name;
    input.name = 'ingredient';
    input.id = `ing_${idx}`;
    input.className = 'form-check-input ingredient-checkbox';
    // live counter when changed
    input.addEventListener('change', updateSelectedCount);

  const label = document.createElement('label');
  label.className = 'form-check-label d-block';
    label.htmlFor = input.id;
    label.textContent = name;

    wrap.appendChild(input);
    wrap.appendChild(label);
    ingredientsBox.appendChild(wrap);
  });

  // inline error message (shown when user tries to submit without any selection)
  const errorDiv = document.createElement('div');
  errorDiv.id = 'ingredientError';
  errorDiv.className = 'text-danger small mt-2';
  errorDiv.style.minHeight = '1.2em'; // reserve space so layout doesn't jump

  const counter = document.createElement('div');
  counter.id = 'selectedCount';
  counter.className = 'small text-muted mt-2';
  counter.textContent = '已選：0 個食材';

  // (已移除生成模式，使用者只勾選食材即可生成推薦)

  // action buttons row
  const btnRow = document.createElement('div');
  btnRow.className = 'btn-row mt-3';

  const nextBtn = document.createElement('button');
  nextBtn.id = 'nextBtn';
  nextBtn.type = 'submit';
  nextBtn.className = 'btn btn-primary';
  nextBtn.textContent = '下一步';

  const backBtn = document.createElement('button');
  backBtn.id = 'backBtn';
  backBtn.type = 'button';
  backBtn.className = 'btn btn-light';
  backBtn.textContent = '返回首頁';
  backBtn.addEventListener('click', showHomePage);

  btnRow.appendChild(nextBtn);
  btnRow.appendChild(backBtn);

  form.appendChild(ingredientsBox);
  form.appendChild(errorDiv);
  form.appendChild(counter);
  form.appendChild(btnRow);

  // placeholder for live result on the right column
  const liveResult = document.createElement('div');
  liveResult.className = 'recipe-result';
  liveResult.innerHTML = '<em>選擇食材後，按「下一步」或直接查看分類推薦</em>';

  // append form and liveResult to grid
  gridWrap.appendChild(form);
  const rightCol = document.createElement('div');
  rightCol.appendChild(liveResult);
  gridWrap.appendChild(rightCol);

  // custom form validation: show inline error if none selected, otherwise generate recipes in-place
  form.addEventListener('submit', function(e){
    e.preventDefault(); // SPA: prevent full submit
    const selectedEls = document.querySelectorAll('.ingredient-checkbox:checked');
    const anyChecked = selectedEls.length > 0;
    if(!anyChecked){
      errorDiv.textContent = '請至少勾選一個食材';
      const firstCheckbox = document.querySelector('.ingredient-checkbox');
      if(firstCheckbox) firstCheckbox.focus();
      return false;
    }
    // clear error and show recipes in the right column
    errorDiv.textContent = '';
    const selectedIngredients = [...selectedEls].map(i=>i.value);
    // call showRecipes to populate the .recipe-result on the right column
    showRecipes(selectedIngredients, 'all');
  });

  app.appendChild(heading);
  app.appendChild(gridWrap);
}

function updateSelectedCount(){
  const c = document.getElementById('selectedCount');
  const count = document.querySelectorAll('.ingredient-checkbox:checked').length;
  c.textContent = `已選：${count} 個食材`;
  // clear inline error when user selects something
  if(count > 0){
    const err = document.getElementById('ingredientError');
    if(err) err.textContent = '';
  }
}

function showCategoryPage(selectedIngredientsFromPrev){
  // accepts selectedIngredients passed from previous form
  const selectedIngredients = selectedIngredientsFromPrev || [...document.querySelectorAll('.ingredient-checkbox:checked')].map(i=>i.value);
  if(selectedIngredients.length===0){
    alert('請至少勾選一個食材！');
    showIngredientSelect();
    return;
  }

  const app = document.getElementById('app');
  app.innerHTML = '';

  const heading = document.createElement('h2');
  heading.textContent = '選擇料理分類';
  app.appendChild(heading);

  const categories = ['main','soup','dessert','all'];
  const btnGroup = document.createElement('div');
  btnGroup.className = 'd-flex flex-wrap gap-2 justify-content-center mb-2';
  categories.forEach(cat => {
    const b = document.createElement('button');
    b.className = 'btn btn-outline-secondary catBtn';
    b.dataset.cat = cat;
    b.textContent = (cat==='main')? '主餐' : (cat==='soup')? '湯品' : (cat==='dessert')? '甜點' : '全部料理';
    b.addEventListener('click', ()=>{
      showRecipes(selectedIngredients, cat);
    });
    btnGroup.appendChild(b);
  });
  const backBtn = document.createElement('button');
  backBtn.id = 'backBtn';
  backBtn.className = 'btn btn-light';
  backBtn.textContent = '返回選食材';
  backBtn.addEventListener('click', showIngredientSelect);

  const actionRow = document.createElement('div');
  actionRow.className = 'd-flex justify-content-center gap-2 mt-3';
  actionRow.appendChild(backBtn);

  const resultDiv = document.createElement('div');
  resultDiv.className = 'recipe-result';

  app.appendChild(btnGroup);
  // mode selector removed - no mode on category page
  app.appendChild(actionRow);
  app.appendChild(resultDiv);
}

function showRecipes(selectedIngredients, category){
  const resultBox = document.querySelector('.recipe-result');
  let matchedRecipes = [];

  // if user selected all available ingredients, show everything
  const allSelected = selectedIngredients.length === allIngredients.length;

  // First pass: include recipes whose mainIngredients are ALL present in selectedIngredients
  const primaryMatches = [];
  const searchCategories = category === 'all' ? Object.keys(recipes) : [category];
  searchCategories.forEach(cat => {
    recipes[cat].forEach(r => {
      const mains = r.mainIngredients || [];
      const mainsMatch = mains.length > 0 && mains.every(i => selectedIngredients.includes(i));
      if(mainsMatch) primaryMatches.push(r.name);
    });
  });

  if(allSelected){
    // select everything
    matchedRecipes = [];
    Object.keys(recipes).forEach(cat => recipes[cat].forEach(r => matchedRecipes.push(r.name)));
  } else if(primaryMatches.length > 0){
    // prefer recipes that fully match main ingredients
    matchedRecipes = primaryMatches;
  } else {
    // fallback: include recipes if any ingredient overlaps (looser match)
    const checkCategory = cat => {
      recipes[cat].forEach(r => {
        const allReq = (r.mainIngredients || []).concat(r.additionalIngredients || []);
        const hasOverlap = allReq.some(i => selectedIngredients.includes(i));
        if(hasOverlap) matchedRecipes.push(r.name);
      });
    };
    if(category === 'all') Object.keys(recipes).forEach(c => checkCategory(c));
    else checkCategory(category);
  }

  if(matchedRecipes.length > 0){
    resultBox.innerHTML = `推薦料理：<br><strong>${matchedRecipes.join('、')}</strong>`;
    resultBox.classList.add('fade-in');
  } else {
    resultBox.innerHTML = `沒有符合條件的料理<br>試著勾更多食材！`;
    resultBox.classList.add('fade-in');
  }
}

showHomePage();