# gaechi

git CLI 또는 VScode sourcecontrol 등 git push를 위한 기반을 구축하세요.

# 작업환경 구성하기(멤버 기준 / CLI)

  git hub에 저장된 작업파일 가져오기
- $git clone https://github.com/hyunseob0826/gaechi.git
- $git config user.name "사용자명"
- $git config user.email 메일주소
- $git pull

 fork로 클론 생성하기
 
 수정한 코드 github에 올리기 (push)
 * 스테이징과 커밋 진행 (git add , git commit)
 * push하기
  - $git push origin 내브랜치명
※ 최초 push시 이전에 git pull이 제대로 되지 않았으면 오류발생
