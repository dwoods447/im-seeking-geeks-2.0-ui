<template>
    <div>
        <ul
        class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
        role="tablist"
        data-te-nav-ref>
        <li role="presentation">
            <a
            href="#tabs-inbox"
            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-inbox"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-inbox"
            aria-selected="true"
            >Inbox</a
            >
        </li>
        <li role="presentation">
            <a
            href="#tabs-sent-messages"
            class="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-sent-messages"
            role="tab"
            aria-controls="tabs-sent-messages"
            aria-selected="false"
            >Sent Messages</a
            >
        </li>
        
        </ul>

        <!--Tabs content-->
        <div class="mb-6">
        <div
            class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home"
            role="tabpanel"
            aria-labelledby="tabs-home-tab"
            data-te-tab-active>
            Tab 1 Inbox content
        </div>
        <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-sent-messages"
            role="tabpanel"
            aria-labelledby="tabs-sent-messages">
            Tab 2 Sent Messages content
        </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>