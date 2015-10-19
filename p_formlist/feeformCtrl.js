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
                //若无数据，则直接进入添加数据界面
                if($rootScope.fees===undefined){
                    $state.go('/addfee');
                }else{//否则先进入列表
                    $state.go('/feelist');
                }
                
            }
            $scope.save = function () {
                alert("保存");
            }
            $scope.submit = function () {
                alert("提交");
            }

            var vm = $scope.vm = {};
            //单据编号 
            vm.cardnum = "9527";
            vm.classes = [
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
            vm.value = vm.classes[1];

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
