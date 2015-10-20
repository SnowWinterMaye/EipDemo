/**
 * Created by dpliudw on 2015-7-3.
 */


angular.module('dpeip')
    .controller('feeformCtrl',
        function ($rootScope, $scope, $state, $ionicPlatform, $stateParams) {
            $scope.greet = "项目费用报销";
            $scope.goback = function () {
                $state.go('/mainform');
            }
            $scope.goFee = function () {
                //先将已填内容保存
                saveData();
                
                //若无数据，则直接进入添加数据界面
                if($rootScope.fees===undefined){
                    $state.go('/addfee');
                }else{//否则先进入列表
                    $state.go('/feelist');
                }
                
            }
            
           var vm = $scope.vm = {};
           vm.BXperson = "向问";  //申请人姓名
           vm.BXdepart = "技术研发部";//部门
           vm.BXproject = "XXX项目";//报销项目
           vm.BXfeedepart = "技术研发部";//费用所属部门
           vm.feeResman = "向问天";//费用负责人
           vm.feesubject = "报销提请";//主题
           if($rootScope.feemain){
               vm.stylevalue = $rootScope.feemain["stylevalue"];
               vm.summoney = $rootScope.feemain["summoney"];
               vm.specialtext = $rootScope.feemain["specialtext"];
               vm.changetext = $rootScope.feemain["changetext"];
               vm.accname = $rootScope.feemain["accname"];
               vm.bankname = $rootScope.feemain["bankname"];
               vm.cardid = $rootScope.feemain["cardid"];
           }
           
           var saveData = function(){
               $rootScope.feemain=vm;
                console.log($rootScope.feemain);
           };
            
            
            $scope.save = function () {
                saveData();
                alert("保存");
                
            }
            $scope.submit = function () {
                alert("提交");
                //若提交成功   则清除所有缓存数据
            }

            //单据编号 
            vm.cardnum = "9527";
            $scope.classes = [
                {
                    province: '北京',
                    code: 'bj',
                    label: '北京市'
                },
                {
                    province: '上海',
                    code: 'sh',
                    label: '上海市'
                },
                {
                    province: '广东',
                    code: 'gz',
                    label: '广州'
                },
                {
                    province: '广东',
                    code: 'sz',
                    label: '深圳'
                }
            ];
            vm.stylevalue = $scope.classes[1];

            vm.summoney = 0;
            if ($rootScope.fees) {
                console.log($rootScope.fees);
                for(var i=0;i<$rootScope.fees.length;i++){
                        vm.summoney+= parseFloat($rootScope.fees[i].money);
                }
            }


            $ionicPlatform.registerBackButtonAction(
                function () {
                    $scope.goback();
                },
                400
                );
        });
