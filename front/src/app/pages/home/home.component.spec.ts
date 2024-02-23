import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeComponent } from './home.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('ホームコンポーネント', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('コンポーネントが生成できること', () => {
    expect(component).toBeTruthy()
  })

  it('ステートフルコンポーネントページへのリンクが表示されていること', () => {
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('li:nth-child(1) a').textContent).toEqual(
      'ステートフルコンポーネント',
    )
  })

  it(`ステートフルコンポーネントページのURLが '/stateful' であること`, () => {
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('li:nth-child(1) a').href).toMatch(/\/stateful$/)
  })
})
