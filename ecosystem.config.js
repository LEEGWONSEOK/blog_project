module.exports = {
  apps: [{
    name: "app",
    script: "./app.js",
    instances: 0, // 클러스터 모드 사용 시 생성할 인스턴스 수
    exec_mode: 'cluster', // fork, cluster 모드 중 선택
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}