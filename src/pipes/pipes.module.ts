import { NgModule } from '@angular/core';
import { FilterPipe } from './filter/filter';
@NgModule({
	declarations: [FilterPipe,
    FilterPipe,
    FilterPipe],
	imports: [],
	exports: [FilterPipe,
    FilterPipe,
    FilterPipe]
})
export class PipesModule {}
