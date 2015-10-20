/**
 * Created by dpliudw on 2015-7-4.
 */

angular.module('dpeip')
    .controller('mainformCtrl',
        function ($rootScope, $scope, $state, $stateParams, $ionicPlatform, $location, $timeout, TaskDataService, ToastService) {
            //返回上一页
            function gohistory() {
                $state.go('application');
            };
            if ($rootScope.todotype == 1) {
                $rootScope.pgTitle = "出差申请";
            } else if ($rootScope.todotype == 2) {
                $rootScope.pgTitle = "差旅费用报销";
            } else if ($rootScope.todotype == 3) {
                $rootScope.pgTitle = "招待费用申请";
            } else if ($rootScope.todotype == 4) {
                $rootScope.pgTitle = "招待费用报销";
            }


            //手机返回键的事件监听
            $ionicPlatform.registerBackButtonAction(
                function () {
                    gohistory();
                },
                400
                );

            $scope.goback = function () {
                gohistory();
            };
            //进入行程明细界面
            $scope.goPath = function () {
                if ($rootScope.paths === undefined) {
                    $state.go('/addpath');
                } else {//否则先进入列表
                    $state.go('/mainlist');
                }
            };
            
            //获取带入数据
           var vm = $scope.vm = {};
           vm.name = "向问";  //申请人姓名
           vm.department = "技术研发部";//部门
           vm.orign = "武汉";//地区
           vm.proname = "XXX项目";//项目名称
           vm.proid = "10012131"//项目编号
           vm.proddepart = "软件工程部"//项目所属部门
           vm.manager = "向问天"//项目经理
           
           if($rootScope.main){
               vm.feemoney = $rootScope.main["feemoney"];
               vm.otherpeople = $rootScope.main["otherpeople"];
               vm.topic = $rootScope.main["topic"];
               vm.target = $rootScope.main["target"];
               vm.plan = $rootScope.main["plan"];
           }
           
           var saveData = function(){
               $rootScope.main=vm;
                console.log($rootScope.main);
           };
           vm.guessstarttime = "开始时间";
           vm.guessendtime = "结束时间";
           if($rootScope.paths&&$rootScope.paths.length>0){
               console.log($rootScope.paths);
               var flag = "2000-00-00 00:00"
               vm.guessstarttime = $rootScope.paths[0].starttime;
               vm.guessendtime = $rootScope.paths[0].endtime;
               for(var i=0;i<$rootScope.paths.length;i++){
                   if($rootScope.paths[i].starttime<vm.guessstarttime){
                       vm.guessstarttime = $rootScope.paths[i].starttime;
                   }
                   if($rootScope.paths[i].endtime>vm.guessendtime){
                       vm.guessendtime = $rootScope.paths[i].endtime;
                   }
                }
           }
            //调至费用报销界面
            $scope.goFee = function () {
                $state.go('/feeform');
            };
            //提交
            $scope.submit = function () {
                alert("提交");
                //若提交成功   则清除所有缓存数据
            };
            
            //保存
            $scope.save = function () {
                saveData();
                alert("保存");
            };
            
            
        
        });