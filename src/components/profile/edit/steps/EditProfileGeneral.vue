<template>
<div class="flex items-center justify-center">
    <div>
        <h2 class="text-center">Please update your profile before proceeding!</h2>
        <div>

            <div class="flex">
                <div class="w-1/2">
                    <FormSelect
                    labelTitle="Enter Your Body Type"
                    name="bodyType"
                    :selectList="bodyTypes"
                    @change="handleSelectBodyType"
                    ></FormSelect>
                </div>
                <div class="w-1/2">
                    <FormSelect
                    labelTitle="Enter Your Height"
                    name="height"
                    :selectList="rangeOfHeights"
                    @change="handleSelectHeight"
                    ></FormSelect>
                </div>
            </div>


            <div class="flex">
                <div class="w-1/2">
                <FormSelect
                labelTitle="Select your marital status"
                name="maritalStatus"
                :selectList="maritalStatuses"
                @change="handleSelectMaritalStatus"
                ></FormSelect>
            </div>
            <div class="w-1/2">
                <FormSelect
                labelTitle="Enter Your Haircolor"
                name="haircolor"
                :selectList="hairColors"
                @change="handleSelectHairColor"
                >
            
                </FormSelect>
                </div>
            </div>

        
            <div class="flex">
                <div class="w-1/2">
                <FormSelect
                labelTitle="Enter Your Religion"
                name="religion"
                :selectList="religions"
                @change="handleSelectReligion"
                >

                </FormSelect>
                </div>
                <div class="w-1/2">
                    <FormSelect
                    labelTitle="Enter your highest education"
                    name="education"
                    :selectList="educations"
                    @change="handleSelectHighestEducation"
                    >

                    </FormSelect>
                </div>
            </div>
        <div class="flex">
            <div class="w-1/2">
                <FormSelect
                labelTitle="Select your eyecolor"
                name="eyecolor"
                :selectList="eyeColors"
                @change="handleSelectEyeColor"
                >
                </FormSelect>
            </div>
            <div class="w-1/2">
                <RadioOption
                 id="does-smoke"
                 name="does-smoke-radio"
                :radioList="doesSmokeChoices"
                label-title="Do you smoke?"
                @change="handleChooseDoesSmoke"
                >
                </RadioOption>
            </div>   
        </div>
            <div class="flex">
            <div class="w-1/2">
                <RadioOption
                 id="does-drink"
                 name="does-drink-radio"
                :radioList="doesDrinkChoices"
                label-title="Do you drink?"
                @change="handleChooseDoesDrink">
                </RadioOption>
            </div>
            <div class="w-1/2">
                <RadioOption
                 id="does-date-interracially"
                 name="does-date-interracially-radio"
                :radioList="doesDateInteraciallyChoices"
                label-title="Do you date interracially?"
                @change="handleChooseDoesDateInterracially">
                </RadioOption>
            </div> 
            </div>
        
            <div class="flex">
                <div class="w-1/2">
                    <RadioOption
                    id="does-have-children"
                    name="does-have-children-radio"
                    :radioList="doesHaveChildrenChoices"
                    label-title="Do you have children?"
                    @change="handleDoesHaveChildren">
                    </RadioOption>
                </div>
                <div class="w-1/2">
                    <RadioOption
                    id="does-do-drugs"
                    name="does-do-drugs-radio"
                    :radioList="doesDoDrugs"
                    label-title="Do you do drugs?"
                    @change="handleChooseDoesDoDrugs">
                    </RadioOption>
                </div>
            </div>
            <div class="flex">
                <div class="w-1/2">
                    <RadioOption
                     id="does-have-pets"
                     name="does-have-pets-radio"
                    :radioList="doesHavePets"
                    label-title="Do you do have pets?"
                    @change="handleChooseDoesHavePets">
                    </RadioOption>
                </div>
            <div class="w-1/2">
                <FormSelect
                labelTitle="Select your dating intent"
                name="datingIntent"
                :selectList="datingIntents"
                @change="handleChooseDatingIntent">
                </FormSelect>
            </div>
            </div>

            <div>
                <TextInput id="profossion" name="profession" :show-add-on="false" input-type="text" input-place-holder="Enter your profession" labelTitle="Enter you profession" @change="handleEnterProfession"/>
            </div>
        
            <div class="flex">
                <div class="w-full">
                    <div class="m-3">
                        <TextArea id="personality" name="geek-personality" placeholder="Describe your personality" labelTitle="Describe your personality" @change="handleDescribePersonality" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import FormSelect from '@/components/general/FormSelect.vue'
import RadioOption from '@/components/general/RadioOption.vue'
import TextInput from '@/components/general/TextInput.vue'
import TextArea from '@/components/general/TextArea.vue'

const emit = defineEmits<{
    (e: 'handleSelectBodyType', bodyType: string): void
    (e: 'handleSelectMaritalStatus', maritalStatus: string): void
    (e: 'handleSelectHeight', height: number): void
    (e: 'handleDescribePersonality', description: string): void
    (e: 'handleSelectHairColor', haircolor: string): void
    (e: 'handleSelectReligion', religion: string): void
    (e: 'handleSelectHighestEducation', education: string): void
    (e: 'handleSelectEyeColor', eyecolor: string): void
    (e: 'handleChooseDoesSmoke', doesSmoke: boolean): void
    (e: 'handleChooseDoesDrink', doesDrink: boolean): void
    (e: 'handleChooseDoesDateInterracially', doesDateInterracially: boolean): void
    (e: 'handleDoesHaveChildren', doesHaveChildren: boolean): void
    (e: 'handleChooseDoesDoDrugs', doesDoDrugs: boolean): void
    (e: 'handleChooseDoesHavePets', doesHavePets: boolean): void
    (e: 'handleChooseDatingIntent', datingIntent: string): void
    (e: 'handleEnterProfession', profession: string): void
}>()


const bodyTypes = ref([
  { name: 'Prefer Not To Say', value: 'Prefer Not To Say' },
  { name: 'Thin', value: 'Thin' },
  { name: 'Athletic', value: 'Athletic' },
  { name: 'Average', value: 'Average' },
  { name: 'A Few Extra Pounds', value: 'A Few Extra Pounds' }
])

const rangeOfHeights = ref([
  { name: "4'5", value: 53 },
  { name: "4'6", value: 54 },
  { name: "4'7", value: 55 },
  { name: "4'8", value: 56 },
  { name: "4'9", value: 57 },
  { name: "4'10", value: 58 },
  { name: "4'11", value: 59 },
  { name: "5'0", value: 60 },
  { name: "5'1", value: 61 },
  { name: "5'2", value: 62 },
  { name: "5'3", value: 63 },
  { name: "5'4", value: 64 },
  { name: "5'5", value: 65 },
  { name: "5'6", value: 66 },
  { name: "5'7", value: 67 },
  { name: "5'8", value: 68 },
  { name: "5'9", value: 69 },
  { name: "5'10", value: 70 },
  { name: "5'11", value: 71 },
  { name: "6'0", value: 72 },
  { name: "6'1", value: 73 },
  { name: "6'2", value: 74 },
  { name: "6'3", value: 75 },
  { name: "6'4", value: 76 },
  { name: "6'5", value: 77 },
  { name: "6'6", value: 78 },
  { name: "6'7", value: 79 },
  { name: "6'8", value: 80 },
  { name: "6'9", value: 81 },
  { name: '7,0', value: 82 },
  { name: '7,1', value: 83 }
])

const hairColors = ref([
 {name: 'black', value: 'black', key: 'hairColor-black-0'},
 {name: 'brown', value: 'brown', key: 'hairColor-brown-1'},
 {name: 'blonde', value: 'blonde', key: 'hairColor-blonde-2'},
 {name: 'red', value: 'red', key: 'hairColor-red-3'},
])


const religions = ref([
           {name: 'Non-religious', value: 'non-religious'},
           {name: 'Chrisitan - other', value: 'chrisitan - other', key: ''},
           {name: 'New age', value: 'new age', key: ''},
           {name: 'Muslim', value: 'muslim', key: ''},
           {name: 'Jewish', value: 'jewish', key: ''},
           {name: 'Catholic', value: 'catholic', key: ''},
           {name: 'Buddhist', value: 'buddhist', key: ''},
           {name: 'Hindu', value: 'hindu', key: ''},
           {name: 'Anglican', value: 'anglican', key: ''},
           {name: 'Sikh', value: 'sikh', key: ''},
           {name: 'Methodist', value: 'methodist', key: ''},
           {name: 'Baptist', value: 'baptist', key: ''},
           {name: 'Lutheran', value: 'lutheran', key: ''},
           {name: 'Presbyterian', value: 'presbyterian', key: ''},
           {name: 'Other', value: 'other', key: ''}
 ])

const educations = ref([
           {name: 'High school', value: 'High school', key: 'High school-0'},
           {name: 'Some college', value: 'Some college', key: 'Some college-1'},
           {name: 'Some university', value: 'Some university', key: 'Some university-2'},
           {name: 'Associates degree', value: 'Associates degree', key: 'Associates degree-3'},
           {name: 'Bachelors', value: 'Bachelors', key: 'Bachelors-4'},
           {name: 'Masters', value: 'Masters', key: 'Masters-5'},
           {name: 'PhD/Post Doctoral', value: 'PhD/Post Doctoral', key: 'PhD/Post Doctoral-6'},
])

const eyeColors = ref([
           {name: 'brown', value: 'brown', key: 'brown-hair-0'},
           {name: 'blue', value: 'blue', key: 'blue-eyes-1'},
           {name: 'green', value: 'green', key: 'green-eyes-2'},
           {name: 'black', value: 'black', key: 'black-eyes-3'},
           {name: 'hazel', value: 'hazel', key: 'hazel-eyes-4'},
])
const maritalStatuses = ref([
           {name: 'single', value: 'single', key: 'single-0'},
           {name: 'married', value: 'married - interested in having an affair', key: 'married-1'},
           {name: 'widowed', value: 'widowed', key: 'widowed-2'},
           {name: 'divorced', value: 'divorced', key: 'divorced-3'},
  ])

const  doesSmokeChoices = ref( [
    {name: 'yes', value: true, key: 'doesSmokeChoices-yes'},
           {name: 'no', value: false, key: 'doesSmokeChoices-no'},
         ])
const  doesDrinkChoices = ref([
            {name: 'yes', value: true, key: 'doesDrinkChoices-yes'},
           {name: 'no', value: false, key: 'doesDrinkChoices-no'},
         ])

  const doesDateInteraciallyChoices = ref([
           {name: 'yes', value: true, key: 'doesDateInteraciallyChoices-yes'},
           {name: 'no', value: false, key: 'doesDateInteraciallyChoices-no'},
         ])
const doesHaveChildrenChoices = ref([
           {name: 'yes', value: true, key: 'doesHaveChildrenChoices-yes'},
           {name: 'no', value: false, key: 'doesHaveChildrenChoices-no'},
         ])
const doesDoDrugs = ref([
           {name: 'yes', value: true, key: 'doesDoDrugs-yes'},
           {name: 'no', value: false, key: 'doesDoDrugs-no'},
])

const doesHavePets = ref([
           {name: 'yes', value: true, key: 'doesHavePets-yes'},
           {name: 'no', value: false, key: 'doesHavePets-no'},
])

const  datingIntents = ref([
           {name: 'I am looking for Casual dating/No Commitment', value: 'I am looking for Casual dating/No Commitment', key: 'datingIntent-0'},
           {name: 'I want to date but nothing serious', value: 'I want to date but nothing serious', key: 'datingIntent-1'},
           {name: "I am putting in serious effort to find someone", value: "I am putting in serious effort to find someone", key: 'datingIntent-2'},
           {name: 'I want to find someone to marry', value: 'I want to find someone to marry', key: 'datingIntent-3'},
 ])


function handleSelectBodyType(bodyType: string) {
  emit('handleSelectBodyType', bodyType)
}

function handleSelectHeight(height: number) {
  emit('handleSelectHeight', height)
}

function handleSelectMaritalStatus(maritalStatus: string) { 
 emit('handleSelectMaritalStatus', maritalStatus)
}

function handleDescribePersonality(description: string){
    emit('handleDescribePersonality', description)
}

function handleSelectHairColor(haircolor: string) { 
    emit('handleSelectHairColor', haircolor)
}

function handleSelectReligion(religion: string) {
    emit('handleSelectReligion', religion)
}

function handleSelectHighestEducation(education: string) {
    emit('handleSelectHighestEducation', education)
}


function handleSelectEyeColor(eyecolor: string) { 
    emit('handleSelectEyeColor', eyecolor)
}

function handleChooseDoesSmoke(doesSmoke: boolean) { 
    emit('handleChooseDoesSmoke', doesSmoke)
}

function handleChooseDoesDrink(doesDrink: boolean) { 
    emit('handleChooseDoesDrink', doesDrink)
}

function handleChooseDoesDateInterracially(doesDateInterracially: boolean) {
    emit('handleChooseDoesDateInterracially', doesDateInterracially)
}

function handleDoesHaveChildren(doesHaveChildren: boolean) { 
    emit('handleDoesHaveChildren', doesHaveChildren)
}

function handleChooseDoesDoDrugs(doesDoDrugs: boolean) { 
    emit('handleChooseDoesDoDrugs', doesDoDrugs)
}

function handleChooseDoesHavePets(doesHavePets: boolean) {
    emit('handleChooseDoesHavePets', doesHavePets)
}

function handleChooseDatingIntent(datingIntent: string) { 
    emit('handleChooseDatingIntent', datingIntent)
}

function handleEnterProfession(professionOption: string) {
    emit('handleEnterProfession', professionOption)
}
</script>
