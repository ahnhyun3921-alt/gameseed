// Projects Data
const projects = [
    {
        title: '픽셀 던전 RPG',
        genre: 'RPG',
        team: '3/5',
        description: '레트로 감성의 로그라이크 던전 탐험 게임. 매번 다르게 생성되는 던전을 탐험하며 아이템을 조합하고 전략적 전투를 펼치세요.',
        fullDescription: '레트로 감성의 로그라이크 던전 탐험 게임입니다. 매번 다르게 생성되는 던전을 탐험하며 100가지 이상의 아이템을 조합하고 전략적 턴제 전투를 펼칩니다.',
        tags: ['Unity', '2D', '로그라이크', '픽셀']
    },
    {
        title: '우주 농장 시뮬레이션',
        genre: '시뮬레이션',
        team: '2/4',
        description: '우주 정거장에서 작물을 키우며 자원을 관리하는 힐링 게임.',
        fullDescription: '우주 정거장을 배경으로 한 농장 시뮬레이션 게임입니다. 다양한 외계 작물을 키우고, 자원을 관리하며, 귀여운 외계 생명체들과 교류합니다.',
        tags: ['Godot', '캐주얼', '힐링']
    },
    {
        title: '리듬 액션 게임',
        genre: '액션',
        team: '4/6',
        description: '음악 비트에 맞춰 적을 물리치는 리듬 액션 게임.',
        fullDescription: '음악의 리듬에 맞춰 적을 공격하는 하이브리드 장르 게임입니다. 정확한 타이밍으로 공격하면 더 강한 데미지를 입힐 수 있습니다.',
        tags: ['Unreal', '3D', '리듬게임']
    },
    {
        title: '호러 미스터리 어드벤처',
        genre: '어드벤처',
        team: '2/5',
        description: '폐쇄된 저택에서 벌어지는 미스터리를 풀어가는 1인칭 호러 게임.',
        fullDescription: '1980년대 한국의 한옥을 배경으로 한 호러 미스터리 게임입니다. 플레이어는 실종된 친구를 찾기 위해 저택을 탐험하며 숨겨진 진실을 밝혀냅니다.',
        tags: ['Unity', '1인칭', '호러', '한국풍', '스토리']
    },
    {
        title: '타워 디펜스 : 성벽 수호자',
        genre: '전략',
        team: '5/6',
        description: '판타지 세계관의 전략적 타워 디펜스 게임.',
        fullDescription: '다양한 타워와 마법을 조합하여 몰려오는 몬스터를 막아내는 타워 디펜스 게임입니다. 50개 이상의 스테이지와 멀티플레이 모드를 지원합니다.',
        tags: ['Unity', '전략', 'TD', '멀티플레이']
    },
    {
        title: '고양이 카페 운영 게임',
        genre: '시뮬레이션',
        team: '1/3',
        description: '귀여운 고양이들과 함께하는 카페 경영 시뮬레이션.',
        fullDescription: '다양한 성격의 고양이들을 돌보고, 손님을 맞이하며, 카페를 꾸미는 힐링 게임입니다. 고양이마다 특별한 스토리가 있습니다.',
        tags: ['Unity', '2D', '힐링', '경영', '고양이']
    },
    {
        title: '사이버펑크 하이웨이',
        genre: '레이싱',
        team: '3/5',
        description: '네온빛 가득한 미래 도시를 질주하는 레이싱 게임.',
        fullDescription: '2077년 미래 도시를 배경으로 한 레이싱 게임입니다. 차량 커스터마이징과 스토리 모드를 제공합니다.',
        tags: ['Unreal', '3D', '레이싱', '사이버펑크']
    },
    {
        title: '마법학교 생활 시뮬레이션',
        genre: 'RPG',
        team: '4/7',
        description: '마법학교에서 친구를 사귀고 마법을 배우는 학원 RPG.',
        fullDescription: '해리포터풍 마법학교를 배경으로 한 학원 생활 시뮬레이션 RPG입니다. 수업을 듣고, 친구들과 관계를 쌓으며, 학교의 비밀을 밝혀냅니다.',
        tags: ['Unity', '3D', 'RPG', '학원물', '스토리']
    }
];

let currentProjectIndex = 0;

// Makers Data
const makers = [
    {
        name: '김개발',
        role: '개발자',
        bio: 'Unity와 C# 경험 5년차 게임 개발자입니다. 모바일 게임부터 PC 게임까지 다양한 프로젝트 경험이 있습니다.',
        skills: ['Unity', 'C#', 'Git'],
        portfolio: '10개 이상의 출시 게임 개발 경험',
        experience: '5년',
        available: true
    },
    {
        name: '이아트',
        role: '아티스트',
        bio: '픽셀 아트 전문 아티스트입니다. 레트로 감성부터 모던한 스타일까지 다양한 작업이 가능합니다.',
        skills: ['픽셀 아트', 'Aseprite', 'Photoshop'],
        portfolio: '인디 게임 5개 아트 작업',
        experience: '3년',
        available: true
    },
    {
        name: '박기획',
        role: '기획자',
        bio: 'RPG와 시뮬레이션 장르 전문 게임 기획자입니다. 체계적인 기획서 작성과 밸런스 조정 경험이 풍부합니다.',
        skills: ['게임 기획', 'Excel', 'Notion'],
        portfolio: '대형 RPG 게임 밸런스 디자인',
        experience: '4년',
        available: true
    },
    {
        name: '최사운드',
        role: '사운드 디자이너',
        bio: '게임 BGM과 효과음 제작 전문입니다. 감성적인 사운드로 게임의 몰입도를 높여드립니다.',
        skills: ['FL Studio', 'Cubase', '사운드 디자인'],
        portfolio: '게임 OST 20곡 이상 제작',
        experience: '6년',
        available: false
    },
    {
        name: '정유니티',
        role: '개발자',
        bio: 'Unity 엔진 전문 개발자입니다. 최적화와 성능 개선에 강점이 있습니다.',
        skills: ['Unity', 'C#', 'Shader', '최적화'],
        portfolio: '모바일 게임 최적화 전문',
        experience: '7년',
        available: true
    },
    {
        name: '강3D',
        role: '3D 모델러',
        bio: '캐릭터와 배경 3D 모델링을 담당합니다. Blender와 Maya 모두 능숙합니다.',
        skills: ['Blender', 'Maya', 'Substance Painter'],
        portfolio: 'AAA급 게임 캐릭터 제작 경험',
        experience: '5년',
        available: true
    },
    {
        name: '송애니',
        role: '애니메이터',
        bio: '2D 스파인 애니메이션과 3D 리깅 전문입니다. 생동감 있는 움직임을 만들어냅니다.',
        skills: ['Spine', 'Unity Animator', 'Maya'],
        portfolio: '모바일 RPG 캐릭터 애니메이션',
        experience: '4년',
        available: true
    },
    {
        name: '한UI',
        role: 'UI/UX 디자이너',
        bio: '게임 UI/UX 디자인 전문가입니다. 직관적이고 아름다운 인터페이스를 만듭니다.',
        skills: ['Figma', 'Photoshop', 'UI 디자인'],
        portfolio: '인기 모바일 게임 UI 디자인',
        experience: '3년',
        available: true
    }
];

// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById(pageId).classList.add('active');
    
    // Render projects when showing landing page
    if (pageId === 'landing') {
        renderProjects(projects); // [수정] 기본 목록으로 렌더링
    }
    
    // Render makers when showing makers page
    if (pageId === 'makers') {
        renderMakers();
    }
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const pageMap = {
        'landing': 0,
        'makers': 1,
        'create': 2,
        'dashboard': 3
    };
    
    const navButtons = document.querySelectorAll('.nav-btn');
    if (pageMap[pageId] !== undefined) {
        navButtons[pageMap[pageId]].classList.add('active');
    }
}

// [수정] Render Projects (필터링된 목록을 받을 수 있도록)
function renderProjects(projectList) {
    const grid = document.querySelector('.projects-grid');
    grid.innerHTML = '';
    
    if (projectList.length === 0) {
        grid.innerHTML = '<p style="color: white; text-align: center; grid-column: 1 / -1;">검색 결과가 없습니다.</p>';
        return;
    }
    
    projectList.forEach((project) => {
        // [수정] projectList의 원본 인덱스를 찾기 위해
        const originalIndex = projects.indexOf(project);
        
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => showProjectDetail(originalIndex);
        
        const emoji = project.genre === 'RPG' ? '🎮' : 
                     project.genre === '시뮬레이션' ? '🌾' :
                     project.genre === '액션' ? '⚔️' :
                     project.genre === '어드벤처' ? '🔦' :
                     project.genre === '전략' ? '🏰' :
                     project.genre === '레이싱' ? '🏎️' : '🎯';
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <div class="meta">${emoji} ${project.genre} · 팀원 ${project.team}</div>
            <div class="description">${project.description}</div>
            <div class="tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// [신규] 키워드 검색 기능
function searchProjects() {
    const titleQuery = document.getElementById('titleSearchInput').value.toLowerCase();
    const keywordQuery = document.getElementById('keywordSearchInput').value.toLowerCase();
    const genreQuery = document.getElementById('genreSearchSelect').value;

    const filteredProjects = projects.filter(project => {
        const titleMatch = titleQuery ? project.title.toLowerCase().includes(titleQuery) : true;
        const genreMatch = genreQuery ? project.genre.toLowerCase() === genreQuery.toLowerCase() : true;
        
        // 키워드 검색: 태그 또는 설명을 확인
        const keywordTagMatch = keywordQuery ? project.tags.some(tag => tag.toLowerCase().includes(keywordQuery)) : false;
        const keywordDescMatch = keywordQuery ? project.description.toLowerCase().includes(keywordQuery) : false;
        
        const keywordMatch = keywordQuery ? (keywordTagMatch || keywordDescMatch) : true;
        
        return titleMatch && genreMatch && keywordMatch;
    });

    renderProjects(filteredProjects); // 필터링된 결과로 렌더링
}


// Render Makers
function renderMakers() {
    const grid = document.querySelector('.makers-grid');
    grid.innerHTML = '';
    
    makers.forEach((maker, index) => {
        const card = document.createElement('div');
        card.className = 'maker-card';
        card.onclick = () => showMakerDetail(index);
        
        card.innerHTML = `
            <h3>${maker.name}</h3>
            <div class="maker-role">${maker.role}</div>
            <div class="maker-bio">${maker.bio}</div>
            <div class="maker-skills">
                ${maker.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Project Detail
function showProjectDetail(index) {
    currentProjectIndex = index;
    const project = projects[index];
    
    document.getElementById('detailTitle').textContent = project.title;
    document.getElementById('detailMeta').textContent = `🎮 ${project.genre} · 팀원 ${project.team} · 모집중`;
    document.getElementById('detailDescription').textContent = project.fullDescription;
    
    // [수정] 상세 페이지를 열 때 댓글 목록도 초기화 (이 부분은 백엔드에서 가져와야 함)
    // document.getElementById('commentsList').innerHTML = ... (DB에서 댓글 로드)
    
    switchTab('overview');
    showPage('detail');
}

// Detail Tabs
function switchTab(tabName) {
    document.querySelectorAll('.detail-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // event.target이 없을 수 있으므로, tabName을 기준으로 버튼을 찾아야 합니다.
    // 간단한 수정을 위해 querySelector를 사용합니다.
    document.querySelector(`.detail-tabs .tab-btn[onclick="switchTab('${tabName}')"]`).classList.add('active');
    
    document.getElementById('tab-overview').style.display = 'none';
    document.getElementById('tab-team').style.display = 'none';
    document.getElementById('tab-comments').style.display = 'none';
    
    document.getElementById('tab-' + tabName).style.display = 'block';
}

// Dashboard Tabs
function switchDashboardTab(tabName) {
    document.querySelectorAll('.dashboard-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
     document.querySelector(`.dashboard-tabs .tab-btn[onclick="switchDashboardTab('${tabName}')"]`).classList.add('active');
    
    document.getElementById('dashboard-profile').style.display = 'none';
    document.getElementById('dashboard-applications').style.display = 'none';
    document.getElementById('dashboard-myprojects').style.display = 'none'; // [수정] '내 프로젝트' 탭 숨기기
    
    document.getElementById('dashboard-' + tabName).style.display = 'block';
}

// Comments
function addComment() {
    const input = document.getElementById('commentInput');
    const text = input.value.trim();
    
    if (!text) {
        alert('댓글 내용을 입력해주세요.');
        return;
    }
    
    const commentsList = document.getElementById('commentsList');
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    
    // [수정] 답글 UI 포함
    newComment.innerHTML = `
        <div class="comment-header">
            <div>
                <span class="comment-author">나 (유저)</span>
                <span class="comment-time"> · 방금 전</span>
            </div>
            <button class="comment-delete" onclick="deleteComment(this)">삭제</button>
        </div>
        <div class="comment-text">${text}</div>
        <div class="comment-footer">
            <button class="btn-reply" onclick="showReplyInput(this)">답글 달기</button>
        </div>
        <div class="reply-input-section">
            <textarea class="comment-input" rows="3" placeholder="답글을 입력하세요..."></textarea>
            <button class="btn-submit small-btn" onclick="addReply(this)">답글 등록</button>
        </div>
    `;
    
    commentsList.insertBefore(newComment, commentsList.firstChild);
    input.value = '';
    
    alert('댓글이 등록되었습니다! (실제 저장을 위해서는 백엔드 서버가 필요합니다.)');
}

// Delete Comment
function deleteComment(button) {
    if (confirm('댓글을 삭제하시겠습니까? (실제 삭제는 백엔드 서버가 필요합니다.)')) {
        const comment = button.closest('.comment');
        if (!comment) { // 대댓글(.comment-reply)의 삭제 버튼일 경우
             button.closest('.comment-reply').remove();
             return;
        }
        comment.style.transition = 'opacity 0.3s ease';
        comment.style.opacity = '0';
        
        setTimeout(() => {
            comment.remove();
        }, 300);
    }
}

// [신규] 답글 입력창 보이기
function showReplyInput(button) {
    const replySection = button.parentElement.nextElementSibling;
    replySection.style.display = 'block';
    replySection.querySelector('textarea').focus();
}

// [신규] 답글 등록 (프로토타입)
function addReply(button) {
    const text = button.previousElementSibling.value;
    if (!text.trim()) {
        alert('답글 내용을 입력해주세요.');
        return;
    }
    
    alert('답글 등록 기능은 백엔드 서버와 데이터베이스가 필요합니다.');
    
    // (시뮬레이션) UI만 숨기기
    const replySection = button.parentElement;
    replySection.style.display = 'none'; // 입력창 숨기기
    replySection.querySelector('textarea').value = ''; // 텍스트 초기화
    
    // (시뮬레이션) 실제로는 DB에 저장 후, 답글 UI를 생성해서 붙여넣어야 함
}

// Genre Selection
function changeGenre() {
    const genre = document.getElementById('genreSelect').value;
    const formSection = document.getElementById('formSection');
    const emptyState = document.getElementById('emptyState');
    const buttonGroup = document.getElementById('buttonGroup');
    
    document.querySelectorAll('.genre-template').forEach(template => {
        template.classList.remove('active');
    });
    
    if (genre) {
        formSection.style.display = 'block';
        emptyState.style.display = 'none';
        buttonGroup.style.display = 'flex';
        
        document.getElementById(genre + 'Template').classList.add('active');
    } else {
        formSection.style.display = 'none'; // [수정] 장르 미선택 시 formSection 숨기기
        emptyState.style.display = 'block'; // [수정] emptyState 다시 보이기
        buttonGroup.style.display = 'none';
    }
}

// Submit Project
function submitProject() {
    const genre = document.getElementById('genreSelect').value;
    
    if (!genre) {
        alert('장르를 선택해주세요.');
        return;
    }
    
    // Get form data based on genre
    let title = '';
    if (genre === 'rpg') {
        title = document.querySelector('#rpgTemplate input[type="text"]').value || '새 RPG 프로젝트';
    } else if (genre === 'visual-novel') {
        title = document.querySelector('#visual-novelTemplate input[type="text"]').value || '새 비주얼 노벨';
    } else if (genre === 'puzzle') {
        title = document.querySelector('#puzzleTemplate input[type="text"]').value || '새 퍼즐 게임';
    }
    
    // Create new project
    const newProject = {
        title: title,
        genre: genre === 'rpg' ? 'RPG' : genre === 'visual-novel' ? '비주얼 노벨' : '퍼즐',
        team: '1/5',
        description: '새로운 게임 프로젝트입니다. 함께 만들어갈 팀원을 찾고 있습니다!',
        fullDescription: '새로운 게임 프로젝트입니다. 함께 만들어갈 팀원을 찾고 있습니다! 자세한 내용은 팀원 모집 후 함께 구체화할 예정입니다.',
        tags: ['신규', genre === 'rpg' ? 'RPG' : genre === 'visual-novel' ? '스토리' : '퍼즐']
    };
    
    // Add to projects array
    projects.unshift(newProject);
    
    alert('프로젝트가 게시되었습니다! 🎉 (실제 저장을 위해서는 백엔드 서버가 필요합니다.)');
    showPage('landing');
    
    // Reset form
    document.getElementById('genreSelect').value = '';
    // [수정] 폼 초기화 로직 보강
    document.querySelectorAll('.genre-template input[type="text"], .genre-template textarea').forEach(input => input.value = '');
    changeGenre();
}

// Show Maker Detail
function showMakerDetail(index) {
    const maker = makers[index];
    const modal = document.getElementById('makerDetailModal');
    
    document.getElementById('makerDetailName').textContent = maker.name;
    document.getElementById('makerDetailRole').textContent = maker.role;
    document.getElementById('makerDetailBio').textContent = maker.bio;
    document.getElementById('makerDetailExperience').textContent = `경력: ${maker.experience}`;
    document.getElementById('makerDetailPortfolio').textContent = maker.portfolio;
    
    const skillsContainer = document.getElementById('makerDetailSkills');
    skillsContainer.innerHTML = maker.skills.map(skill => 
        `<span class="skill-tag">${skill}</span>`
    ).join('');
    
    const availabilityDiv = document.getElementById('makerDetailAvailability');
    if (maker.available) {
        availabilityDiv.innerHTML = '<span style="color: #4caf50;">✓ 현재 팀 참여 가능</span>';
    } else {
        availabilityDiv.innerHTML = '<span style="color: #ff6b6b;">✗ 현재 프로젝트 진행 중</span>';
    }
    
    modal.classList.add('active');
}

// Close Maker Detail
function closeMakerDetail() {
    document.getElementById('makerDetailModal').classList.remove('active');
}

// Contact Maker
function contactMaker() {
    alert('팀원에게 연락이 전송되었습니다! (실제 기능은 백엔드 서버가 필요합니다.)');
    closeMakerDetail();
}

// Application Modal
function showApplicationModal() {
    document.getElementById('applicationModal').classList.add('active');
}

function closeApplicationModal() {
    document.getElementById('applicationModal').classList.remove('active');
    document.getElementById('applicationPosition').value = '';
    document.getElementById('applicationMessage').value = '';
}

function submitApplication() {
    const position = document.getElementById('applicationPosition').value;
    const message = document.getElementById('applicationMessage').value;
    
    if (!position) {
        alert('지원 포지션을 선택해주세요.');
        return;
    }
    
    if (!message.trim()) {
        alert('지원 메시지를 작성해주세요.');
        return;
    }
    
    alert('지원서가 제출되었습니다! (실제 저장을 위해서는 백엔드 서버가 필요합니다.)');
    closeApplicationModal();
}

// Close modal on background click
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('applicationModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeApplicationModal();
            }
        });
    }
    
    // Initial render
    renderProjects(projects); // [수정] 전체 목록으로 초기 렌더링
});

// AI Analysis Variables
let aiQuestions = [];
let userAnswers = {};
let originalScenario = '';

// Analyze Scenario with AI
async function analyzeScenario() {
    const scenario = document.getElementById('scenarioInput').value.trim();
    
    if (!scenario) {
        alert('게임 아이디어를 입력해주세요.');
        return;
    }

    // --- [수정] AI 기능 경고 ---
    alert("AI 분석 기능은 백엔드 서버와 유료 API 키가 필요합니다.\n\n" +
          "이 버튼을 누르면 실제 API가 호출되어야 하지만, 현재는 프론트엔드 코드만 있어 'CORS' 보안 정책에 의해 100% 차단됩니다.\n\n" +
          "작동 원리 설명을 위해 '가짜' 질문 데이터를 보여주는 시뮬레이션 모드로 전환합니다.");

    originalScenario = scenario;
    
    // Show thinking state
    const resultDiv = document.getElementById('aiAnalysisResult');
    const thinkingDiv = document.getElementById('aiThinking');
    const questionsDiv = document.getElementById('aiQuestions');
    const analyzeBtn = document.getElementById('analyzeBtn');
    
    resultDiv.style.display = 'block';
    thinkingDiv.style.display = 'block';
    questionsDiv.style.display = 'none';
    analyzeBtn.disabled = true;

    // [수정] 실제 API 호출 대신 '가짜' 데이터 사용 (시뮬레이션)
    setTimeout(() => {
        try {
            // (원래 API 호출 로직은 주석 처리)
            // const response = await fetch(...)
            // const data = await response.json();
            
            // [수정] 시뮬레이션을 위한 가짜 데이터
            const fakeResponse = {
              "questions": [
                "이 게임의 핵심 플레이어 타겟은 누구인가요? (예: 10대 여성, 하드코어 게이머)",
                "게임의 주요 아트 스타일이나 분위기는 어떤가요? (예: 픽셀 아트, 몽환적인 3D)",
                "플레이어가 경험할 핵심 게임플레이 메카닉은 무엇인가요? (예: 턴제 전투, 실시간 전략)",
                "게임의 주된 스토리는 어떻게 전개되나요? (예: 복수극, 성장 드라마)",
                "이 게임을 다른 게임과 차별화하는 가장 독특한 요소는 무엇인가요?"
              ]
            };
            
            aiQuestions = fakeResponse.questions;
            
            // Display questions
            displayQuestions();
            
            thinkingDiv.style.display = 'none';
            questionsDiv.style.display = 'block';
            
        } catch (error) {
            console.error('AI 분석 오류:', error);
            alert('AI 분석 시뮬레이션 중 오류가 발생했습니다.');
            thinkingDiv.style.display = 'none';
            analyzeBtn.disabled = false;
        }
    }, 1500); // 1.5초간 '생각 중' 애니메이션 표시
}

// Display Questions
function displayQuestions() {
    const questionsList = document.getElementById('questionsList');
    questionsList.innerHTML = '';
    
    aiQuestions.forEach((question, index) => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        questionItem.innerHTML = `
            <label class="question-label">질문 ${index + 1}: ${question}</label>
            <input type="text" class="question-input" id="answer${index}" placeholder="답변을 입력해주세요...">
        `;
        questionsList.appendChild(questionItem);
    });
}

// Generate Final GDD
async function generateGDD() {
    // Collect answers
    userAnswers = {};
    let allAnswered = true;
    
    aiQuestions.forEach((question, index) => {
        const answer = document.getElementById(`answer${index}`).value.trim();
        if (!answer) {
            allAnswered = false;
        }
        userAnswers[question] = answer;
    });
    
    if (!allAnswered) {
        alert('모든 질문에 답변해주세요.');
        return;
    }

    // [수정] AI 기능 경고
    alert("GDD 생성 기능 역시 백엔드 서버가 필요합니다.\n\n" +
          "시뮬레이션을 위해 '가짜' GDD 데이터를 생성하여 보여줍니다.");
    
    // Show thinking
    const questionsDiv = document.getElementById('aiQuestions');
    const finalGDDDiv = document.getElementById('finalGDD');
    const thinkingDiv = document.getElementById('aiThinking');
    
    questionsDiv.style.display = 'none';
    thinkingDiv.style.display = 'block';
    
    // [수정] 실제 API 호출 대신 '가짜' 데이터 사용 (시뮬레이션)
    setTimeout(() => {
        try {
            // (원래 API 호출 로직은 주석 처리)
            // const response = await fetch(...)
            // const data = await response.json();
            
            // [수정] 시뮬레이션을 위한 가짜 GDD 마크다운 텍스트
            const gddText = `
# 게임 기획서 (AI 생성 예시)

## 게임 개요
- **제목**: (AI가 생성한 제목)
- **장르**: (아이디어 기반 추천)
- **로그라인**: ${originalScenario}

## 핵심 게임플레이
- (AI가 답변 기반으로 핵심 플레이를 정리합니다)
- ${userAnswers[aiQuestions[2]] || '미정'}

## 타겟 플레이어
- (AI가 답변 기반으로 타겟을 분석합니다)
- ${userAnswers[aiQuestions[0]] || '미정'}

## 주요 기능
- 기능 1: (AI가 제안)
- 기능 2: (AI가 제안)

## 아트 스타일 및 분위기
- (AI가 답변 기반으로 스타일을 제안합니다)
- ${userAnswers[aiQuestions[1]] || '미정'}

## 기술 스택 제안
- **엔진**: (AI가 제안)
- **서버**: (필요시 AI가 제안)
            `;
            
            // Convert markdown to HTML (simple version)
            const gddHTML = convertMarkdownToHTML(gddText);
            
            document.getElementById('gddContent').innerHTML = gddHTML;
            
            thinkingDiv.style.display = 'none';
            finalGDDDiv.style.display = 'block';
            
        } catch (error) {
            console.error('GDD 생성 오류:', error);
            alert('GDD 생성 시뮬레이션 중 오류가 발생했습니다.');
            thinkingDiv.style.display = 'none';
            questionsDiv.style.display = 'block';
        }
    }, 1500); // 1.5초간 '생각 중' 애니메이션
}

// Simple Markdown to HTML converter
function convertMarkdownToHTML(markdown) {
    let html = markdown;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h5>$1</h5>');
    html = html.replace(/^## (.*$)/gim, '<h5>$1</h5>');
    html = html.replace(/^# (.*$)/gim, '<h5>$1</h5>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Paragraphs
    html = html.split('\n\n').map(para => {
        if (!para.startsWith('<h5>') && !para.startsWith('<ul>') && para.trim()) {
            return '<p>' + para.replace(/\n/g, '<br>') + '</p>'; // [수정] 줄바꿈 유지
        }
        return para;
    }).join('');
    
    return html;
}

// Reset AI Analysis
function resetAI() {
    document.getElementById('scenarioInput').value = '';
    document.getElementById('aiAnalysisResult').style.display = 'none';
    document.getElementById('aiQuestions').style.display = 'none';
    document.getElementById('finalGDD').style.display = 'none';
    document.getElementById('analyzeBtn').disabled = false;
    
    aiQuestions = [];
    userAnswers = {};
    originalScenario = '';
}

// Save and Continue
function saveAndContinue() {
    alert('기획서가 저장되었습니다! (실제 저장을 위해서는 백엔드 서버가 필요합니다.)\n이제 팀원을 모집해보세요. 🎉');
    showPage('landing');
    resetAI();
}

// --- [신규] 백엔드 기능 알림 함수 ---

function serverLogin() {
    alert('로그인 기능은 네이버 개발자 센터 등록과 백엔드 서버 구축이 필요합니다.');
}

function editProject() {
    alert('프로젝트 수정 기능은 백엔드 서버와 사용자 인증(로그인)이 필요합니다.');
    // (시뮬레이션) 수정 페이지로 이동
    // showPage('create');
    // ... (기존 데이터 로드 로직 필요)
}

function deleteProject() {
    if (confirm('정말로 이 프로젝트를 삭제하시겠습니까?\n(실제 삭제는 백엔드 서버와 사용자 인증이 필요합니다.)')) {
        alert('프로젝트가 삭제되었습니다. (시뮬레이션)');
        
        // (프론트엔드 시뮬레이션)
        projects.splice(currentProjectIndex, 1);
        showPage('landing');
    }
}

function saveProfile() {
    alert('프로필/포트폴리오 저장 기능은 백엔드 서버와 데이터베이스가 필요합니다.');
}

function manageApplication(action) {
    alert(`지원자를 ${action === 'accept' ? '수락' : '거절'}했습니다. (실제 기능은 백엔드 서버가 필요합니다.)`);
}
