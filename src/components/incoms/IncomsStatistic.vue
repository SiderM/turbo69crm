<template>
  <div class="grid gap-6 mb-4 md:grid-cols-2 xl:grid-cols-4">
    <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
      <div class="p-4 flex items-center">
        <div class="p-3 rounded-full bg-gray-200 mr-4">
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
            <path
              d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
            ></path>
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600">
            Всего заявок
          </p>
          <p class="text-lg font-semibold text-gray-700">
            {{incomsStat.total}}
          </p>
        </div>
      </div>
    </div>
    <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
      <div class="p-4 flex items-center">
        <div class="p-3 rounded-full text-green-500 bg-green-100 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600">
            Новые
          </p>
          <p class="text-lg font-semibold text-gray-700">
            {{incomsStat.new.length}}
          </p>
        </div>
      </div>
    </div>
    <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
      <div class="p-4 flex items-center">
        <div class="p-3 rounded-full text-blue-500 bg-blue-100 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600">
            Обзвонены
          </p>
          <p class="text-lg font-semibold text-gray-700">
            {{incomsStat.calling.length}}
          </p>
        </div>
      </div>
    </div>
    <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
      <div class="p-4 flex items-center">
        <div class="p-3 rounded-full text-red-500 bg-red-100 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600">
            Отменены
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">{{incomsStat.break.length}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IncomsStatistic',
  props: {
    incomsStat: Object
  }
}
</script>
